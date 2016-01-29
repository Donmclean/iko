/**
 * Created by donmclean on 12/14/15.
 */
"use strict";
module.exports = (gulp, $, config) => {
    gulp.task('express', function() {
        let deferred = config.vars.Q.defer();

        try {
            config.vars.app.use(config.vars.express.static(config.vars.EXPRESS_ROOT));
            config.vars.app.listen(config.vars.EXPRESS_PORT);
            deferred.resolve();
        } catch (err) {
            $.util.log($.util.colors.red(err));
            deferred.reject();
        }

        return deferred.promise;
    });
};