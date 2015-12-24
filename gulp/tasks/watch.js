/**
 * Created by donmclean on 12/14/15.
 */
module.exports = (gulp, $, config) => {
    "use strict";
    gulp.task('watch', function (cb) {
        funcs.isWatching = true;
        gulp.watch(config.jsSrcs.src, () => {
            config.vars.runSequence('clean-temp','sass','template-cache','js-deps','js-srcs','templates');
        });

        gulp.watch(config.templates.src, () => {
            config.vars.runSequence('clean-temp','sass','template-cache','js-deps','js-srcs','templates');
        });

        gulp.watch(config.sass.watch, () => {
            config.vars.runSequence('clean-temp','sass','template-cache','js-deps','js-srcs','templates');
        });
        //$.livereload.listen(); //Using Browser Sync instead
        cb();
    });
};