/**
 * Created by donmclean on 12/10/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('lint', () => {
        var deferred = config.vars.Q.defer();

        try {
            if(funcs.isWatching) {
                gulp.src(config.jsSrcs.src)
                    .pipe($.plumber(funcs.plumberOptions()))
                    .pipe($.jscs())
                    .pipe($.jscs.reporter())
                    .pipe($.jscs.reporter('fail'))
                    .pipe($.jshint())
                    .pipe($.jshint.reporter(funcs.jshintErrorHandlerNoExit))
                    .pipe($.debug({title: 'linting js src files:'}))
                    .pipe($.livereload())
                    .on('error', (err) => {$.util.log($.util.colors.red(err));})
                    .on('end', () => {
                        deferred.resolve();
                    });
                return deferred.promise;
            } else {
                gulp.src(config.jsSrcs.src)
                    .pipe($.plumber(funcs.plumberOptions()))
                    .pipe($.jscs())
                    .pipe($.jscs.reporter())
                    .pipe($.jscs.reporter('failImmediately'))
                    .pipe($.jshint())
                    .pipe($.jshint.reporter(funcs.jshintErrorHandler))
                    .pipe($.debug({title: 'linting js src files:'}))
                    .pipe($.livereload())
                    .on('error', (err) => {$.util.log($.util.colors.red(err));})
                    .on('end', () => {
                        deferred.resolve();
                    });
                return deferred.promise;
            }
        }
        catch (err) {
            $.util.log($.util.colors.red(err));
        }

    });
};