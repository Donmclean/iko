/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('audio', () => {
        let deferred = config.vars.Q.defer();
        gulp.src(config.media.audio.src)
            .pipe($.plumber())
            .pipe($.debug({title: 'copying audio files:'}))
            .pipe(gulp.dest(config.media.audio.dest))
            .on('error', (err) => {$.util.log($.util.colors.red(err));})
            .on('end', function () {
                deferred.resolve();
            });
        return deferred.promise;
    });
};