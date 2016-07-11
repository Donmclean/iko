/**
 * Created by donmclean on 5/29/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('sass', () => {
        
        return gulp.src(config.sass.src)
            .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))
            .pipe($.if(!!funcs.customBuild.sourcemaps || !!funcs.isDev || !!funcs.isProd, $.sourcemaps.init()))
            .pipe($.sass().on('error', funcs.sassErrorHandler))
            .pipe($.addSrc.append(config.css.src.src))
            .pipe($.csslint())
            .pipe($.csslint.reporter(funcs.cssLintErrorHandler))
            .pipe($.debug({title: 'copying and minifying sass/css:'}))
            .pipe($.concat(config.sass.mainFileName))
            .pipe($.if(!!funcs.customBuild.autoprefix || !!funcs.isDev || !!funcs.isProd, $.autoprefixer()))
            .pipe($.if(!funcs.isDev && !funcs.isWatching,$.rev()))
            .pipe($.if(!funcs.customBuild.minifySASS && !!funcs.customBuild.sourcemaps || !!funcs.isDev || !!funcs.isProd, $.sourcemaps.write()))
            .pipe($.if(!!funcs.isDev, gulp.dest(config.tempDir)))
            .pipe($.if(!!funcs.isCustom && !funcs.customBuild.minifySASS, gulp.dest(config.sass.destDir)))
            .pipe($.size({showFiles:true}))
            .pipe($.if(!!funcs.customBuild.minifySASS || !!funcs.isProd, $.rename({suffix: '.min'})))
            .pipe($.if(!!funcs.customBuild.minifySASS || !!funcs.isProd, $.cleanCss()))
            .pipe($.if(!!funcs.customBuild.minifySASS && !!funcs.customBuild.sourcemaps || !!funcs.isProd, $.sourcemaps.write()))
            .pipe($.if(!!funcs.customBuild.minifySASS || !!funcs.isProd, $.size({showFiles:true})))
            .pipe($.if(!!funcs.isCustom || !!funcs.isProd, gulp.dest(config.sass.destDir)));
    });
};
