/**
 * Created by donmclean on 12/15/15.
 */
module.exports = (gulp, $, config,funcs) => {
    "use strict";
    gulp.task('build-dev2',(cb) => {
        funcs.isProd = false;
        funcs.isUnitTest = true;
        //config.vars.runSequence('lint-gulp','lint','clean','clean-temp','sass','template-cache','js-deps','js-srcs','run-tests-watch','templates','media','express','watch','browser-sync',cb);

        config.vars.runSequence('lint-gulp','sass');

        //var promise = config.vars.runSequence('lint-gulp');
        //promise.then(() => {
        //    promise = config.vars.runSequence('lint');
        //});

        //config.vars.runSequence('lint-gulp');
    });
};

