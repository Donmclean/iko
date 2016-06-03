/**
 * Created by donmclean on 5/26/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('lint-js-src', () => {

        return gulp.src(config.js.src.src)
            .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))
            .pipe($.jshint())
            .pipe($.jscs({configPath: config.jscsConfig}))
            .pipe($.jscsStylish.combineWithHintResults())
            .pipe($.jscs.reporter('fail'))
            // .pipe($.jscs.reporter('failImmediately'))
            // .pipe($.if(false,$.jshint.reporter(funcs.jshintErrorHandler, true)))
            .pipe($.if(true,$.jshint.reporter(funcs.jshintErrorHandler, true)))
            .pipe($.debug({title: 'linting js src files:'}));
        
    });
};