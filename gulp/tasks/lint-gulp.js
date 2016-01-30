/**
 * Created by donmclean on 12/6/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('lint-gulp', () => {

        let deferred = config.vars.Q.defer();

            try {
                gulp.src(config.gulpFiles)
                    .pipe($.plumber())
                    .pipe($.jscs())
                    .pipe($.jscs.reporter())
                    .pipe($.jscs.reporter('failImmediately'))
                    .pipe($.jshint())
                    .pipe($.jshint.reporter(funcs.jshintErrorHandler))
                    .pipe($.debug({title: 'linting gulp files:'}))
                    .pipe($.livereload())
                    .on('error', (err) => {$.util.log($.util.colors.red(err));})
                    .on('end', function () {
                        deferred.resolve();
                    });
                return deferred.promise;
            } catch (err) {
                $.util.log($.util.colors.red(err));
            }
    });
};