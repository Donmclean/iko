/**
 * Created by donmclean on 6/9/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('default',gulp.series('build-dev', done => done()));
};