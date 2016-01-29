/**
 * Created by donmclean on 12/14/15.
 */
"use strict";
module.exports = (gulp, $, config) => {
    gulp.task('js-deps', () => {
        let deferred = config.vars.Q.defer();

            try {
                gulp.src(config.jsDeps.src)
                    .pipe($.plumber())
                    .pipe($.concat(config.jsDeps.mainFileName))
                    .pipe($.size({showFiles:true}))
                    .pipe($.rename({suffix: '.min'}))
                    .pipe($.uglify())
                    .pipe($.rev())
                    .pipe($.size({showFiles:true}))
                    .pipe(gulp.dest(config.tempPath))
                    .pipe(gulp.dest(config.jsDeps.dest))
                    .on('error', (err) => {$.util.log($.util.colors.red(err));})
                    .on('end', function () {
                        console.log("test");
                        deferred.resolve();
                    });
                return deferred.promise;
            }
            catch (err) {
                $.util.log($.util.colors.red(err));
            }
    });
};