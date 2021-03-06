/**
 * The idiomatic ReactJS application compiles JSX as a build step, and doesn't use the in-browser JSX transformer.
 * This repo uses a very basic gulp + webpack + babel build to write React with ES6, and build it for the browser
 * @type {Gulp|exports}
 */
const gulp        = require('gulp')
    , gwebpack    = require('gulp-webpack')
    , browserSync = require('browser-sync')
    , nodemon     = require('gulp-nodemon')
    , reload      = browserSync.reload
    , del         = require('del')
    , $           = require('gulp-load-plugins')({pattern: ['gulp-*']});

/**
 * A simple task to clean any build products
 */
gulp.task('clean', function( cb ) {
    del(['build'], cb);
});

/**
 * A simple task to copy our HTML file and images to the dist directory
 */
gulp.task('copy', function() {
    return gulp.src("./assets/images/**/*.*").pipe(gulp.dest("dist/assets/images"));
});

/**
 * The main step is 'pack' this step takes our 'client.js' file, and builds it using Webpack, the babel-loader plugin to
 * transpile ES6 and outputs it to the dist directory
 */
gulp.task('pack', function() {
    return gulp.src('./client.js')
        .pipe(gwebpack({
            resolve: {
                extensions: ['', '.js', '.jsx']
            },
            output: {
                path: __dirname + '/dist',
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
 * Transpile ES6 & JSX to ES5 so unit testing tools can import the files
 */

gulp.task('transpile', ['clean'], function() {
    return gulp.src(['app/**/*.js', 'app/**/*.jsx'])
        .pipe($.babel())
        .pipe(gulp.dest('build/js'));
});

gulp.task('develop', ['build'],function() {
    nodemon({
        "execMap": {
            "js": "node --harmony",
            "jsx": "node --harmony"
        },
        script: 'server.js'
        , ext: 'jsx js'
        , tasks: ['build']
    })
        .on('restart', function() {
            console.log('restarted!')
        })
})

/**
 * The default task is build
 */
gulp.task("default", ["develop"]);

/**
 * Define our build task
 */
gulp.task("build", ["copy", "pack"]);