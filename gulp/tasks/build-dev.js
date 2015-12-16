/**
 * Created by donmclean on 12/15/15.
 */
/**
 * Created by donmclean on 12/15/15.
 */
module.exports = (gulp, $, config) => {
    "use strict";
    gulp.task('build-dev',() => {
        config.vars.async.series([
            (done) => {
                setTimeout(() => {
                    gulp.run('lint-gulp');
                    done();
                }, 1000);
            },
            (done) => {
                setTimeout(() => {
                    gulp.run('lint');
                    done();
                }, 1000);
            },
            (done) => {
                setTimeout(() => {
                    gulp.run('clean');
                    done();
                }, 1000);
            },
            (done) => {
                setTimeout(() => {
                    gulp.run('templates');
                    done();
                }, 1000);
            },
            (done) => {
                setTimeout(() => {
                    gulp.run('sass');
                    done();
                }, 1000);
            },
            (done) => {
                setTimeout(() => {
                    gulp.run('js-deps');
                    done();
                }, 1000);
            },
            (done) => {
                setTimeout(() => {
                    gulp.run('js-srcs');
                    done();
                }, 1000);
            },
            (done) => {
                setTimeout(() => {
                    gulp.run('express');
                    done();
                }, 1000);
            },
            (done) => {
                setTimeout(() => {
                    gulp.run('watch');
                    done();
                }, 1000);
            }
        ]);
    });
};

