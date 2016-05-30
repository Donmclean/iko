/**
 * Created by donmclean on 5/25/16.
 */

module.exports = (gulp, $, config, funcs) => {
    
    funcs.isDev = true;
    
    gulp.task('build-dev',
        gulp.series(
            'clean',
            gulp.parallel('lint-gulp', 'lint-js-src','media','sass','js-src','js-deps'),
            'templates','express',
            'browser-sync',
            done => done()
        )
    );
};