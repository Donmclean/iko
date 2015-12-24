/**
 * Created by donmclean on 12/16/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('videos', (cb) => {
        gulp.src(config.media.videos.src)
            .pipe(gulp.dest(config.media.videos.dest));
        cb();
    });
};