/**
 * Created by donmclean on 12/6/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {

    gulp.task('lint-gulp', () => {
        gulp.src(config.gulpFiles)
            .pipe($.jscs())
            .pipe($.jscs.reporter())
            .pipe($.jscs.reporter('failImmediately'))
            .pipe($.jshint())
            .pipe($.jshint.reporter('jshint-stylish'))
            .pipe($.eslint())
            .pipe($.eslint.format())
            .pipe($.eslint.failOnError().on('error', funcs.errorHandler))
            .pipe($.eslint.results(funcs.resultsHandler));
    });

};