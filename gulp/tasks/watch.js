/**
 * Created by donmclean on 12/14/15.
 */
module.exports = (gulp, $, config) => {
    "use strict";
    gulp.task('watch', function () {
        gulp.watch(config.jsSrcs.src, () => {
            config.vars.async.series([
                (done) => {
                    setTimeout(() => {
                        gulp.run('lint');
                        done();
                    }, 1000);
                },
                (done) => {
                    setTimeout(() => {
                        gulp.run('js-srcs');
                        done();
                    }, 1000);
                }]);
        });
        gulp.watch(config.templates.src, ['templates']);
        gulp.watch(config.sass.watch, ['sass']);
        $.livereload.listen();
    });
};