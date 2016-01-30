/**
 * Created by donmclean on 12/15/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('build-prod',(cb) => {
        funcs.isProd = true;
        config.vars.runSequence('lint-gulp','lint','clean','clean-temp','sass','template-cache','js-deps','js-srcs','run-unit-tests','templates','media','rollback',cb);
    });
};

