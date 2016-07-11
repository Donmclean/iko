/**
 * Created by donmclean on 6/10/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {

    funcs.processGulpArgs(funcs.args).then(() => {

        gulp.task('build-custom',
            // Process Gulp Arguments
            gulp.series(
                (cb) => {
                    funcs.isCustom = true;
                    cb();
                },
                funcs.runGulpTaskParallel(['lint-gulp', 'lint-js-src','lint-js-tests', 'clean', 'clean-temp']),
                funcs.runGulpTaskParallel(['media','sass','css-deps','js-src','js-deps']),
                funcs.runGulpTaskSeries(['templates', 'run-unit-tests']),
                funcs.runGulpTaskCustom(funcs.runServer,'browser-sync'),
                done => done()
            )
        );
    });
};