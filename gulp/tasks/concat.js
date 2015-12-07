/**
 * Created by donmclean on 12/5/15.
 */

module.exports = function (gulp, $) {
    'use strict';
    gulp.task('concat', function () {
        return $.util.log("concat!!!");
    });
};


//    gulp.task('concat', function () {
//    gulp.src([basePath+'gulpfile.js', basePath+'gulp/gulp.config.js'])
//        .pipe(plugins.concat('all.js'))
//        .pipe(gulp.dest('./'))
//    //.pipe(plugins.eslint())
//    //.pipe(plugins.eslint.format());
//    //.pipe(eslint.failOnError().on('error', errorHandlerWithExit));
//    //.pipe(eslint.failAfterError());
//});