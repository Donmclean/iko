/**
 * Created by donmclean on 5/25/16.
 */

module.exports = (gulp, $, config, funcs) => {
    
    gulp.task('media',
        gulp.parallel('audio', 'files', 'fonts', 'images','videos', done => done())
    );
};