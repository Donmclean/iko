/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('videos', () => {
        let deferred = config.vars.Q.defer();

        gulp.src(config.media.videos.src)
            .pipe($.plumber(funcs.plumberOptions()))
            .pipe($.debug({title: 'copying video files:'}))
            .pipe(gulp.dest(config.media.videos.dest))
            .on('error', (err) => {$.util.log($.util.colors.red(err));})
            .on('end', function () {
                deferred.resolve();
            });
        return deferred.promise;

    });
};