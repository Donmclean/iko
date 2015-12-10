/**
 * Created by donmclean on 12/8/15.
 */
module.exports = (gulp, $, config) => {
    "use strict";
    gulp.task('templates', () => {
        $.util.log(config.templates.dest);
       gulp.src(config.templates.src)
           .pipe($.jade())
           .pipe(gulp.dest(config.templates.dest))
    });


};