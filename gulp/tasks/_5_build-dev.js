/**
 * Created by donmclean on 5/25/16.
 */

module.exports = (gulp, $, config, funcs) => {
    
    funcs.isDev = true;
    
    gulp.task('build-dev',
        gulp.series(
            'clean','clean-temp',
            gulp.parallel('lint-gulp', 'lint-js-src','media','sass','js-src','js-deps'),
            'templates','express',
            'watch',
            'browser-sync',
            done => done()
        )
    );
};