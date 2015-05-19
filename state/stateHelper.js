import serialize from "serialize-javascript";
/*
 * Share state with the client by injecting Context into the App object
 *
 * @method shareState
 * @param {Object} application
 * @param {Object} application context
 * @return {String}
 */
export function shareState( application, context ) {
    debug(application.getComponent());

    var state = application.dehydrate(context);
    var serializedState = serialize(state);

    return '(function (root) {\n' +
        'root.App || (root.App = {});\n' +
        'root.App.Context = ' + serializedState +
        ';\n }(this));';
}

