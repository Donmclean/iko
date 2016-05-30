/**
 * Created by donmclean on 5/29/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('sass', () => {
        return gulp.src(config.sass.src)
            .pipe($.sourcemaps.init())
            .pipe($.sass().on('error', funcs.sassErrorHandler))
            .pipe($.addSrc(config.css.src.src))
            .pipe($.csslint())
            .pipe($.csslint.reporter(funcs.cssLintErrorHandler))
            .pipe($.debug({title: 'copying and minifying sass/css:'}))
            .pipe($.concat(config.sass.mainFileName))
            .pipe($.autoprefixer())
            .pipe($.sourcemaps.write())
            .pipe($.rev())
            .pipe(gulp.dest(config.tempDir))
            .pipe(gulp.dest(config.sass.destDir))
            .pipe($.size({showFiles:true}))
            .pipe($.rename({suffix: '.min'}))
            .pipe($.if(false, $.cleanCss()))
            .pipe($.sourcemaps.write())
            // .pipe(gulp.dest(config.tempDir))
            .pipe(gulp.dest(config.sass.destDir))
            .pipe($.size({showFiles:true}));
    });
};
