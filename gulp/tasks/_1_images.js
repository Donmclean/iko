/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('images', () => {

        return gulp.src(config.media.images.src)
            .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))
            .pipe($.debug({title: 'copying images:'}))
            // .pipe($.imagemin({
            //     progressive: true,
            //     use: [config.vars.pngquant()]
            // }))
            .pipe(gulp.dest(config.media.images.destDir));

    });
};