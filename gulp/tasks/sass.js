/**
 * Created by donmclean on 12/5/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('sass', () => {
        gulp.src(config.sass.src)
            .pipe($.sourcemaps.init())
            .pipe($.sass().on('error', funcs.sassErrorHandler))
            .pipe($.autoprefixer())
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest(config.sass.dest))
            .pipe($.rename({suffix: '.min'}))
            .pipe($.minifyCss())
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest(config.sass.dest));

        //return $.util.log("sass!!!");

    });
};

