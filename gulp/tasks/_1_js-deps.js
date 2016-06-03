/**
 * Created by donmclean on 5/29/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    
    gulp.task('js-deps', () => {

        return gulp.src(config.js.deps.src)
            .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))
            .pipe($.debug({title: 'copying and minifying js deps:'}))
            .pipe($.concat(config.js.deps.mainFileName))
            .pipe($.rev())
            // .pipe(gulp.dest(config.tempPath))
            .pipe(gulp.dest(config.js.deps.destDir))
            .pipe($.size({showFiles:true}))
            .pipe($.rename({suffix: '.min'}))
            // .pipe($.uglify())
            .pipe($.size({showFiles:true}))
            // .pipe(gulp.dest(config.tempPath))
            .pipe(gulp.dest(config.js.deps.destDir));
    });
};