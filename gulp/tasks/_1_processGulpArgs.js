/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('processGulpArgs', done => {
        funcs.processGulpArgs(funcs.args).then(() => {
            done();
        });
    });
};