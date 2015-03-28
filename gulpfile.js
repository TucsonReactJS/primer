/**
 * The idiomatic ReactJS application compiles JSX as a build step, and doesn't use the in-browser JSX transformer.
 * This repo uses a very basic gulp + webpack + babel build to write React with ES6, and build it for the browser
 * @type {Gulp|exports}
 */
var gulp       = require('gulp')
    , gwebpack = require('gulp-webpack');
/**
 * A simple task to copy our HTML file and images to the dist directory
 */
gulp.task('copy', function() {
    var html = gulp.src("./app/index.html").pipe(gulp.dest("dist/"))
        , images = gulp.src("./app/images/**/*.*").pipe(gulp.dest("dist/images"));
});
/**
 * The main step is 'pack' this step takes our 'client.js' file, and builds it using Webpack, the babel-loader plugin to
 * transpile ES6 and outputs it to the dist directory
 */
gulp.task('pack', function() {
    return gulp.src('./app/client.js')
        .pipe(gwebpack({
            resolve: {
                extensions: ['', '.js', '.jsx']
            },
            output: {
                path: __dirname + '/dist/js',
                filename: 'client.js'
            },
            module: {
                loaders: [
                    {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
                    {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
                ]
            }
        }))
        .pipe(gulp.dest('dist/'));
});

/**
 * The default task is build
 */
gulp.task("default", ["build"]);
/**
 * Define our build task
 */
gulp.task("build", ["copy", "pack"]);