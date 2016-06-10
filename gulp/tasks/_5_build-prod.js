/**
 * Created by donmclean on 5/25/16.
 */

module.exports = (gulp, $, config, funcs) => {
    
    gulp.task('build-prod',
        gulp.series(
            (cb) => {
                funcs.isProd = true;
                cb();
            },
            gulp.parallel('lint-gulp','lint-js-src','clean','clean-temp'),
            gulp.parallel('media','sass','css-deps','js-src','js-deps'),
            //'express',
            'templates',
            'run-unit-tests',
            'run-integration-tests',
            done => done()
        )
    );
};