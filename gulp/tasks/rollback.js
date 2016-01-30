/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('rollback', (cb) => {
        //let deferred = config.vars.Q.defer();

        try {
            if(funcs.isProd && funcs.isUnitTest && !funcs.unitTestPassed) {
                $.util.log($.util.colors.red("Karma Unit Tests Failed"));
                $.util.log($.util.colors.yellow("Rolling Back......"));
                config.vars.runSequence('clean-temp','clean',cb);
            }
            else if(funcs.isProd && funcs.isIntegrationTest && !funcs.integrationTestPassed) {
                $.util.log($.util.colors.red("Karma Integration Tests Failed"));
                $.util.log($.util.colors.yellow("Rolling Back......"));
                config.vars.runSequence('clean-temp','clean',cb);
            } else if(funcs.isProd) {
                $.util.log($.util.colors.blue("Build Completed Successfully"));
                $.util.log($.util.colors.yellow("Cleaning Up ......"));
                config.vars.runSequence('clean-temp',cb);
            } else {
                $.util.log($.util.colors.blue("Build Completed Successfully"));
                $.util.log($.util.colors.yellow("Cleaning Up ......"));
                config.vars.runSequence('clean-temp',cb);
            }
        }
        catch (err) {
            $.util.log($.util.colors.red(err));
            cb();
        }
    });
};