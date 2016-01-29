/**
 * Created by donmclean on 12/29/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('run-tests-once', () => {
        let deferred = config.vars.Q.defer();

            try {
                funcs.startTests(true, false, true, false)
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