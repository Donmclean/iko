/**
 * Created by donmclean on 5/26/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('lint-gulp', () => {

        return gulp.src(config.gulpFiles)
            .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))
            .pipe($.jshint())
            .pipe($.jscs({configPath: config.gulpJSCSConfig}))
            .pipe($.jscsStylish.combineWithHintResults())
            // .pipe($.jscs.reporter('failImmediately'))
            .pipe($.jshint.reporter(funcs.jshintErrorHandler, true))
            .pipe($.debug({title: 'linting gulp files:'}));
    });
};