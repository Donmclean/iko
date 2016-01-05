/**
 * Created by donmclean on 12/16/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('fonts', (cb) => {
        gulp.src(config.media.fonts.src)
            .pipe($.plumber())
            .pipe(gulp.dest(config.media.fonts.dest));
        cb();
    });
};