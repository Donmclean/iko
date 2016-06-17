/**
 * Created by donmclean on 5/26/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('lint-js-tests', () => {

        //Check for changed files
        let changedJSFiles = [];
        if(config.vars._.isEmpty(config.tests.changed)) {
            changedJSFiles = config.tests.all;
        } else {
            changedJSFiles = config.tests.changed;
            config.tests.changed = [];
        }

        return gulp.src(funcs.isWatching ? changedJSFiles : config.tests.all)
            .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))
            .pipe($.jshint())
            .pipe($.jscs({configPath: config.jscsConfig}))
            .pipe($.jscsStylish.combineWithHintResults())
            .pipe($.jscs.reporter('fail'))
            .pipe($.if(!!funcs.exitOnGulpGlobalErrors,$.jscs.reporter('failImmediately')))
            .pipe($.jshint.reporter(funcs.jshintErrorHandler, !!funcs.exitOnGulpGlobalErrors))
            .pipe($.debug({title: 'linting js test files:'}));
        
    });
};