/**
 * Created by donmclean on 12/5/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('sass', (cb) => {
        setTimeout(() => {
            try {
                gulp.src(config.sass.src)
                    .pipe($.sourcemaps.init())
                    .pipe($.scssLint())
                    .pipe($.scssLint.failReporter('E'))
                    .pipe($.sass().on('error', funcs.sassErrorHandler))
                    .pipe($.autoprefixer())
                    .pipe($.sourcemaps.write())
                    .pipe($.rev())
                    .pipe(gulp.dest(config.tempPath))
                    .pipe(gulp.dest(config.sass.dest))
                    .pipe($.rename({suffix: '.min'}))
                    .pipe($.minifyCss())
                    .pipe($.sourcemaps.write())
                    .pipe(gulp.dest(config.tempPath))
                    .pipe(gulp.dest(config.sass.dest))
                    .pipe($.livereload());
                cb();
            }
            catch (err) {
                $.util.log(err);
            }
        }, 1000);
    });
};

