/**
 * Created by donmclean on 6/2/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('reload-browser-sync', done => {
        config.vars.browserSync.reload();
        done();
    });
};