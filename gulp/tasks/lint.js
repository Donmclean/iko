/**
 * Created by donmclean on 12/10/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {

    gulp.task('lint', (cb) => {

        if(funcs.isWatching) {
            gulp.src(config.jsSrcs.src)
                .pipe($.plumber())
                .pipe($.jscs())
                .pipe($.jscs.reporter())
                .pipe($.jscs.reporter('fail'))
                .pipe($.jshint())
                .pipe($.jshint.reporter(funcs.jshintErrorHandlerNoExit));
            cb();
        } else {
            gulp.src(config.jsSrcs.src)
                .pipe($.plumber())
                .pipe($.jscs())
                .pipe($.jscs.reporter())
                .pipe($.jscs.reporter('failImmediately'))
                .pipe($.jshint())
                .pipe($.jshint.reporter(funcs.jshintErrorHandler));
            cb();
        }
    });
};