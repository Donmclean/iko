/**
 * Created by donmclean on 12/10/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('lint', () => {
        let deferred = config.vars.Q.defer();

        if(funcs.isWatching) {
            var runTask = () => {
                let deferred2 = config.vars.Q.defer();
                gulp.src(config.jsSrcs.src)
                    .pipe($.plumber())
                    .pipe($.jscs())
                    .pipe($.jscs.reporter())
                    .pipe($.jscs.reporter('fail'))
                    .pipe($.jshint())
                    .pipe($.jshint.reporter(funcs.jshintErrorHandlerNoExit));
                deferred2.resolve();
                return deferred2.promise;
            };
            runTask().then(() => {
                deferred.resolve();
            });
            return deferred.promise;
        } else {
            var runTask2 = () => {
                let deferred2 = config.vars.Q.defer();
                gulp.src(config.jsSrcs.src)
                    .pipe($.plumber())
                    .pipe($.jscs())
                    .pipe($.jscs.reporter())
                    .pipe($.jscs.reporter('failImmediately'))
                    .pipe($.jshint())
                    .pipe($.jshint.reporter(funcs.jshintErrorHandler));
                deferred2.resolve();
                return deferred2.promise;
            };
            runTask2().then(() => {
                deferred.resolve();
            });
            return deferred.promise;
        }
    });
};