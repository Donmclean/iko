/**
 * Created by donmclean on 5/28/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('express', function() {
        let deferred = config.vars.Q.defer();

        try {
            if(!!funcs.isProd) {
                config.vars.app.use(config.vars.express.static(config.EXPRESS_ROOT_PROD));
            } else {
                config.vars.app.use(config.vars.express.static(config.EXPRESS_ROOT_DEV));
            }

            config.vars.app.listen(config.EXPRESS_PORT);
            deferred.resolve();
        } catch (err) {
            config.vars.logi.error(err);
            deferred.reject();
        }

        return deferred.promise;
    });
};