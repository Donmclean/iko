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
            .pipe($.if(!!funcs.customBuild.sourcemaps || !!funcs.isDev || !!funcs.isProd, $.sourcemaps.write()))
            .pipe(gulp.dest(config.sass.destDir))
            .pipe($.size({showFiles:true}))
            .pipe($.if(!!funcs.customBuild.minifySASS || !!funcs.isProd, $.cleanCss()))
            .pipe($.if(!!funcs.customBuild.minifySASS || !!funcs.isProd, $.rename({suffix: '.min'})))
            .pipe($.if(!!funcs.customBuild.minifySASS || !!funcs.isProd, $.size({showFiles:true})))
            .pipe($.if(!!funcs.customBuild.minifySASS || !!funcs.isProd, $.sourcemaps.write()))
            .pipe($.if(!!funcs.customBuild.minifySASS || !!funcs.isProd, gulp.dest(config.sass.destDir)));
    });
};