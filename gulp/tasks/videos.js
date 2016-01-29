/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('videos', (cb) => {
        gulp.src(config.media.videos.src)
            .pipe($.plumber())
            .pipe(gulp.dest(config.media.videos.dest));
        cb();
    });
};