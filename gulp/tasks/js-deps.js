/**
 * Created by donmclean on 12/14/15.
 */
module.exports = (gulp, $, config) => {
    "use strict";
    gulp.task('js-deps', (cb) => {
        setTimeout(() => {
            try {
                gulp.src(config.jsDeps.src)
                    .pipe($.plumber())
                    .pipe($.concat(config.jsDeps.mainFileName))
                    .pipe($.rename({suffix: '.min'}))
                    .pipe($.uglify())
                    .pipe($.rev())
                    .pipe(gulp.dest(config.tempPath))
                    .pipe(gulp.dest(config.jsDeps.dest))
                    .pipe($.filesize());
                cb();
            }
            catch (err) {
                $.util.log(err);
            }
        }, 1000);
    });
};