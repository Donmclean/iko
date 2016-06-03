/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('files', () => {

        return gulp.src(config.media.files.src)
            .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))
            .pipe($.debug({title: 'copying other files:'}))
            .pipe(gulp.dest(config.media.files.destDir));

    });
};