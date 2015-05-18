require('node-jsx').install({extension: '.jsx'});
var koa = require('koa'),
    Router = require('koa-router'),
    React = require('react'),
    serve = require('koa-static'),
    mount = require('koa-mount'),
    thunkify = require('thunkify-wrap'),
    stateHelper = require("./state/stateHelper"),
    navigateAction = require('flux-router-component').navigateAction;

//router instance
var apiRouter = new Router();

//create our app
var server = koa();

//mount our web api
server.use(mount('/api', apiRouter.middleware()));

//mount our static middleware
server.use(mount('/dist', serve(__dirname + '/dist', {defer: true})));

//register middleware
require('./middleware/logger')(server);
require('./middleware/content_types')(server);

//register routes
require('./routes/server_routes')(apiRouter);

//index component
var HtmlComponent = React.createFactory(require('./components/html.jsx'));

//create our react-fluxible application
var app = require("./app");


server.use(mount("/", function *( next ) {

    //ignore api and static routes
    if ( this.path.startsWith("/dist") || this.path.startsWith('/api') ) {
        return yield next;
    }

    var _this = this;

    // Per request/session
    var context = app.createContext();
    var actionContext = context.getActionContext();
    var executeAction = thunkify(actionContext.executeAction);

    // Execute navigation action
    try {
        yield executeAction(navigateAction, {url: _this.path});
    } catch ( err ) {
        if ( err.status === 404 ) {
            this.throw(404);
        }

        this.throw(500, 'Error happened.');
    }

    var AppComponent = app.getAppComponent();
    var html = React.renderToStaticMarkup(HtmlComponent({
        title: "Primer",
        state: stateHelper.shareState(app, context),
        markup: React.renderToString(AppComponent({
            context: context.getComponentContext()
        }))
    }));

    //set the body
    _this.body = html;

    yield next;

}));

//start the server
server.listen(3000);