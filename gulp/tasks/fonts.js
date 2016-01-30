/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('fonts', () => {
        let deferred = config.vars.Q.defer();

        gulp.src(config.media.fonts.src)
            .pipe($.plumber())
            .pipe($.debug({title: 'copying fonts:'}))
            .pipe(gulp.dest(config.media.fonts.dest))
            .on('error', (err) => {$.util.log($.util.colors.red(err));})
            .on('end', function () {
                deferred.resolve();
            });
        return deferred.promise;
    });
};