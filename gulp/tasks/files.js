/**
 * Created by donmclean on 12/16/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('files', (cb) => {
        gulp.src(config.media.files.src)
            .pipe(gulp.dest(config.media.files.dest));
        cb();
    });
};