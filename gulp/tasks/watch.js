/**
 * Created by donmclean on 12/14/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('watch', function (cb) {
        funcs.isWatching = true;

        // Watch JS SOURCE files
        gulp.watch(config.jsSrcs.src, () => {
            config.vars.runSequence('clean-temp','lint','js-srcs','templates','clean-temp','run-unit-tests');
        });

        // Watch UNIT TEST files
        gulp.watch(config.tests.unit, () => {
            config.vars.runSequence('run-unit-tests');
        });

        // Watch TEMPLATE (jade/html) files
        gulp.watch(config.templates.src, () => {
            config.vars.runSequence('clean-temp','template-cache','js-srcs','templates','clean-temp');
        });

        // Watch SASS files
        gulp.watch(config.sass.watch, () => {
            config.vars.runSequence('clean-temp','sass','templates','clean-temp');
        });

        // Watch CSS files
        gulp.watch(config.css.src, () => {
            config.vars.runSequence('clean-temp','sass','templates','clean-temp');
        });

        //$.livereload.listen(); //Using Browser Sync instead
        cb();
    });
};