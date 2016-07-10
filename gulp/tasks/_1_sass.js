/**
 * Created by donmclean on 5/29/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('sass', () => {
        
        return gulp.src(config.sass.src)
            .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))
            .pipe($.sourcemaps.init())
            .pipe($.sass().on('error', funcs.sassErrorHandler))
            .pipe($.addSrc(config.css.src.src))
            .pipe($.csslint())
            .pipe($.csslint.reporter(funcs.cssLintErrorHandler))
            .pipe($.debug({title: 'copying and minifying sass/css:'}))
            .pipe($.concat(config.sass.mainFileName))
            .pipe($.autoprefixer())
            .pipe($.if(!!funcs.customBuild.minifySASS || !!funcs.isProd, $.rev()))
            .pipe($.if(!!funcs.customBuild.minifySASS, $.cleanCss()))
            .pipe($.if(!!funcs.customBuild.sourcemaps || !!funcs.isDev || !!funcs.isProd, $.sourcemaps.write()))
            .pipe($.if(!!funcs.isDev, gulp.dest(config.tempDir), gulp.dest(config.sass.destDir)))
            .pipe($.size({showFiles:true}))
            .pipe($.if(!!funcs.isProd, $.rename({suffix: '.min'})))
            .pipe($.if(!!funcs.isProd, $.cleanCss()))
            .pipe($.if(!!funcs.isProd, $.sourcemaps.write()))
            .pipe($.if(!!funcs.isProd, gulp.dest(config.sass.destDir)))
            .pipe($.if(!!funcs.isProd, $.size({showFiles:true})));
    });
};
