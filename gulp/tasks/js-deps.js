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
                    .pipe($.size({showFiles:true}))
                    .pipe($.rename({suffix: '.min'}))
                    .pipe($.uglify())
                    .pipe($.rev())
                    .pipe(gulp.dest(config.tempPath))
                    .pipe(gulp.dest(config.jsDeps.dest))
                    .pipe($.size({showFiles:true}));
                cb();
            }
            catch (err) {
                $.util.log($.util.colors.red(err));
            }
        }, 1000);
    });
};