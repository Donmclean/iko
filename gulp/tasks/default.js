/**
 * Created by donmclean on 12/15/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('default',(cb) => {
        funcs.isProd = true;
        funcs.isUnitTest = true;
        config.vars.runSequence('build-prod',cb);
    });
};

