/**
 * Created by donmclean on 5/30/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('watch', function (cb) {
        funcs.isWatching = true;

        // Watch JS SOURCE files
        gulp.watch(config.js.src.src, () => {
            funcs.reloadBrowserSync();
        });

        // Watch UNIT TEST files
        // gulp.watch(config.tests.unit, () => {
        //     config.vars.runSequence('run-unit-tests');
        // });

        // Watch TEMPLATE (jade/html) files
        // gulp.watch(config.templates.src, () => {
        //     funcs.reloadBrowserSync();
        //     // config.vars.runSequence('clean-temp','template-cache','js-srcs','templates','clean-temp');
        // });
        //
        // // Watch SASS files
        gulp.watch(config.sass.watch, gulp.series('sass'));

        //     gulp.series('sass', 'templates',done);
        //     // funcs.reloadBrowserSync();
        //     // config.vars.runSequence('clean-temp','sass','templates','clean-temp');
        // });
        //
        // // Watch CSS files
        // gulp.watch(config.css.src, () => {
        //     funcs.reloadBrowserSync();
        //     // config.vars.runSequence('clean-temp','sass','templates','clean-temp');
        // });

        cb();
    });
};