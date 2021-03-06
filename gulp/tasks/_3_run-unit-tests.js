/**
 * Created by donmclean on 6/9/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('run-unit-tests', () => {
        funcs.isUnitTest = true;
        let deferred = config.vars.Q.defer();

        try {

            if(config.vars._.isEmpty(config.tests.all)) {
                deferred.resolve();
            } else {
                funcs.startUnitTests(true, false)
                    .then(() => {
                        deferred.resolve();
                    })
                    .catch((err) => {
                        config.vars.logi.error('ERROR:', err);
                    });
            }
            
            return deferred.promise;
        }
        catch (err) {
            config.vars.logi.error('ERROR:', err);
            config.vars.exec(process.exit(1));
        }
    });
};