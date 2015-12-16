/**
 * Created by donmclean on 12/6/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {

    gulp.task('lint-gulp', (cb) => {
        gulp.src(config.gulpFiles)
            .pipe($.jscs())
            .pipe($.jscs.reporter())
            .pipe($.jscs.reporter('failImmediately'))
            .pipe($.jshint())
            .pipe($.jshint.reporter(funcs.jshintErrorHandler));
            cb();
    });

};