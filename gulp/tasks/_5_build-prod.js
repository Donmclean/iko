/**
 * Created by donmclean on 5/25/16.
 */

module.exports = (gulp, $, config, funcs) => {

    funcs.exitOnGulpGlobalErrors = true;
    
    gulp.task('build-prod',
        gulp.series(
            (cb) => {
                funcs.isProd = true;
                cb();
            },
            gulp.parallel('lint-gulp','lint-js-src','lint-js-tests','clean','clean-temp'),
            gulp.parallel('media','sass','css-deps','js-src','js-deps'),
            //'express',
            'templates',
            'run-unit-tests',
            'run-selenium-tests',
            done => done()
        )
    );
};