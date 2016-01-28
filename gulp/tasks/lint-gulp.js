/**
 * Created by donmclean on 12/6/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('lint-gulp', (cb) => {
        var deffered = config.vars.Q.defer();

        var run = () => {
            gulp.src(config.gulpFiles)
                .pipe($.plumber())
                .pipe($.jscs())
                .pipe($.jscs.reporter())
                .pipe($.jscs.reporter('failImmediately'))
                .pipe($.jshint())
                .pipe($.jshint.reporter(funcs.jshintErrorHandler));
            deffered.resolve();
            return deffered.promise;
        };

        run().then(() => {
            cb();
        });





        //return gulp.src(config.gulpFiles)
        //    .pipe($.plumber())
        //    .pipe($.jscs())
        //    .pipe($.jscs.reporter())
        //    .pipe($.jscs.reporter('failImmediately'))
        //    .pipe($.jshint())
        //    .pipe($.jshint.reporter(funcs.jshintErrorHandler));
        //cb();
    });

};