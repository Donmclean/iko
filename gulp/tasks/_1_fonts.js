/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('fonts', () => {

        return gulp.src(config.media.fonts.src)
            .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))
            .pipe($.debug({title: 'copying fonts:'}))
            .pipe($.if(!!funcs.isDev, gulp.dest(config.media.fonts.tempDir)))
            .pipe($.if(!funcs.isDev, gulp.dest(config.media.fonts.destDir)));

    });
};