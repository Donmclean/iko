/**
 * Created by donmclean on 6/10/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {

    gulp.task('build-custom',
        gulp.series(
            (cb) => {
                funcs.isDev = true;
                cb();
            },
            gulp.parallel('lint-gulp','lint-js-src','clean','clean-temp'),
            gulp.parallel('media','sass'),
            //'express',
            'templates',
            'run-unit-tests',
            done => done()
        )
    );
};