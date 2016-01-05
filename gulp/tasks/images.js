/**
 * Created by donmclean on 12/16/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('images', (cb) => {
        gulp.src(config.media.images.src)
            .pipe($.plumber())
            .pipe($.imagemin({
                progressive: true,
                use: [config.vars.pngquant()]
            }))
            .pipe(gulp.dest(config.media.images.dest));
        cb();
    });
};