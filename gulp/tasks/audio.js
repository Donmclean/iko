/**
 * Created by donmclean on 12/16/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('audio', (cb) => {
        gulp.src(config.media.audio.src)
            .pipe(gulp.dest(config.media.audio.dest));
        cb();
    });
};