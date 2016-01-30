/**
 * Created by donmclean on 12/29/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('run-integration-tests', () => {
        funcs.isIntegrationTest = true;
        var deferred = config.vars.Q.defer();

        try {
            funcs.startTests(true, false, false, true)
                .then(() => {
                    deferred.resolve();
                })
                .catch((err) => {
                    $.util.log($.util.colors.red(err));
                });
            return deferred.promise;
        }
        catch (err) {
            $.util.log($.util.colors.red(err));
            config.vars.exec(process.exit(1));
        }
    });
};