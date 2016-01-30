/**
 * Created by donmclean on 12/15/15.
 */
"use strict";
module.exports = (gulp, $, config,funcs) => {
    gulp.task('build-dev',(cb) => {
        funcs.isProd = false;
        config.vars.runSequence('lint-gulp','lint','clean','clean-temp','sass','template-cache','js-deps','js-srcs','run-unit-tests','templates','media','express','watch','browser-sync','rollback',cb);
    });
};

