/**
 * Created by donmclean on 12/14/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('watch', function (cb) {
        funcs.isWatching = true;
        gulp.watch(config.jsSrcs.src, () => {
            config.vars.runSequence('clean-temp','js-srcs','templates');
        });

        gulp.watch(config.templates.src, () => {
            config.vars.runSequence('clean-temp','template-cache','js-srcs','templates');
        });

        gulp.watch(config.sass.watch, () => {
            config.vars.runSequence('clean-temp','sass','templates');
        });
        //$.livereload.listen(); //Using Browser Sync instead
        cb();
    });
};