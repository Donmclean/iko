/**
 * Created by donmclean on 6/10/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('css-deps', () => {

        return gulp.src(config.css.deps.src)
            .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))
            .pipe($.sourcemaps.init())
            .pipe($.debug({title: 'copying and minifying css deps:'}))
            .pipe($.concat(config.css.deps.mainFileName))
            .pipe($.rev())
            .pipe($.autoprefixer())
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest(config.sass.destDir))
            .pipe($.size({showFiles:true}))
            .pipe($.cleanCss())
            .pipe($.rename({suffix: '.min'}))
            .pipe($.size({showFiles:true}))
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest(config.sass.destDir));
    });
};