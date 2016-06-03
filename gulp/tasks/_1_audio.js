/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('audio', () => {

        return gulp.src(config.media.audio.src)
            .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))
            .pipe($.debug({title: 'copying audio files:'}))
            .pipe(gulp.dest(config.media.audio.destDir));

    });
};