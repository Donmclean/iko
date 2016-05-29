/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('videos', () => {

        return gulp.src(config.media.videos.src)
            .pipe($.debug({title: 'copying video files:'}))
            .pipe(gulp.dest(config.media.videos.destDir));

    });
};