/**
 * Created by donmclean on 12/14/15.
 */
module.exports = (gulp, $, config) => {
    "use strict";
    gulp.task('js-deps', (cb) => {
        gulp.src(config.jsDeps.src)
            .pipe($.concat('deps.js'))
            .pipe($.rename({suffix: '.min'}))
            .pipe($.uglify())
            .pipe(gulp.dest(config.jsDeps.dest));
            cb();
    });

};