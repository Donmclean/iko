/**
 * Created by donmclean on 12/10/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('clean-temp', () => {
        var deferred = config.vars.Q.defer();

        try {
            funcs.deletePath("Temp", config.tempPath)
                .then(() => {
                    deferred.resolve();
                })
                .catch((err) => {
                    $.util.log($.util.colors.red(err));
                    deferred.reject();
                });
            return deferred.promise;
        } catch (err) {
            $.util.log($.util.colors.red(err));
        }
    });
};