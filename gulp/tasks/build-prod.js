/**
 * Created by donmclean on 12/15/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('build-prod',(cb) => {
        funcs.isProd = true;
        config.vars.runSequence('lint-gulp','lint','clean','clean-temp','sass','template-cache','js-deps','js-srcs','run-tests-once','templates','media',cb);
    });
};

