var gulp     = require('gulp'),
    gwebpack = require('gulp-webpack');

gulp.task('copy', function() {
    return gulp.src("./app/index.html").pipe(gulp.dest("dist/"));
});
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

gulp.task("default", ["build"]);
gulp.task("build", ["copy", "pack"]);