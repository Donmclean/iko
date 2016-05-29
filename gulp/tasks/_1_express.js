/**
 * Created by donmclean on 5/28/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('express', function() {
        let deferred = config.vars.Q.defer();

        try {
            config.vars.app.use(config.vars.express.static(config.vars.EXPRESS_ROOT));
            config.vars.app.listen(config.vars.EXPRESS_PORT);
            deferred.resolve();
        } catch (err) {
            config.vars.logi.error(err);
            deferred.reject();
        }

        return deferred.promise;
    });
};