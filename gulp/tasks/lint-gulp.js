/**
 * Created by donmclean on 12/6/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('lint-gulp', () => {

        let deferred = config.vars.Q.defer();

            try {
                var runTask = () => {
                    let deferred2 = config.vars.Q.defer();
                    gulp.src(config.gulpFiles)
                        .pipe($.plumber())
                        .pipe($.jscs())
                        .pipe($.jscs.reporter())
                        .pipe($.jscs.reporter('failImmediately'))
                        .pipe($.jshint())
                        .pipe($.jshint.reporter(funcs.jshintErrorHandler));
                    deferred2.resolve();
                    return deferred2.promise;
                };
                runTask().then(() => {
                    deferred.resolve();
                });

            } catch (err) {
                $.util.log($.util.colors.red(err));
            }
        return deferred.promise;
    });
};