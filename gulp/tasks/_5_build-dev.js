/**
 * Created by donmclean on 5/25/16.
 */

module.exports = (gulp, $, config, funcs) => {

    gulp.task('build-dev',
        gulp.series(
            (cb) => {
                funcs.isDev = true;
                cb();
            },
            gulp.parallel('lint-gulp','lint-js-src','lint-js-tests','clean','clean-temp'),
            gulp.parallel('media','sass'),
            //'express',
            'templates',
            'run-unit-tests',
            'browser-sync',
            'watch',
            done => done()
        )
    );
};