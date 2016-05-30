/**
 * Created by donmclean on 5/30/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('browser-sync', () => {

        let deferred = config.vars.Q.defer();
        
        funcs.initializeBrowserSync().then(() => {
            config.vars.logi.success('BrowserSync initilalized...');
            deferred.resolve();
        });

        return deferred.promise;

    });
};