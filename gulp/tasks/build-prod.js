/**
 * Created by donmclean on 12/15/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('build-prod',(cb) => {
        funcs.isProd = true;
        config.vars.runSequence('lint-gulp','lint','clean','clean-temp','sass','css-deps','template-cache','js-deps','js-srcs','templates','media','run-unit-tests','run-integration-tests','rollback',cb);
    });
};

