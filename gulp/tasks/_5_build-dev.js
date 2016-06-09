/**
 * Created by donmclean on 5/25/16.
 */

module.exports = (gulp, $, config, funcs) => {
    
    funcs.isDev = true;
    
    gulp.task('build-dev',
        gulp.series(
            gulp.parallel('lint-gulp', 'lint-js-src','clean','clean-temp'),
            gulp.parallel('media','sass'),
            //'express',
            'templates',
            'run-unit-tests',
            'run-integration-tests',
            'browser-sync',
            'watch',
            done => done()
        )
    );
};