/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('images', () => {

        return gulp.src(config.media.images.src)
            .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))
            .pipe($.if(!!funcs.minifyImages, $.debug({title: 'copying & minifying images:'}), $.debug({title: 'copying images:'})))
            .pipe($.if(!!funcs.minifyImages, $.imagemin({
                progressive: true,
                use: [config.vars.pngquant()]
            })))
            .pipe($.if(!!funcs.isDev, gulp.dest(config.media.images.tempDir)))
            .pipe($.if(!funcs.isDev, gulp.dest(config.media.images.destDir)));

    });
};
