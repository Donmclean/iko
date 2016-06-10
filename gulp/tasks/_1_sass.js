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
            .pipe($.sourcemaps.write())
            .pipe($.if(!!funcs.isProd, $.rev()))
            .pipe($.if(!!funcs.isDev, gulp.dest(config.tempDir)))
            .pipe($.if(!funcs.isDev, gulp.dest(config.sass.destDir)))
            .pipe($.size({showFiles:true}))
            .pipe($.if(!funcs.isWatching && !funcs.isDev,$.rename({suffix: '.min'})))
            .pipe($.if(!funcs.isWatching && !funcs.isDev, $.cleanCss()))
            .pipe($.if(!funcs.isWatching && !funcs.isDev, $.sourcemaps.write()))
            // .pipe(gulp.dest(config.tempDir))
            .pipe($.if(!funcs.isWatching && !funcs.isDev, gulp.dest(config.sass.destDir)))
            .pipe($.if(!funcs.isWatching && !funcs.isDev, $.size({showFiles:true})));
    });
};
