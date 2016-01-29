/**
 * Created by donmclean on 12/10/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('clean', () => {
        let deferred = config.vars.Q.defer();

        try {
            funcs.deletePath("app", config.dest)
                .then(() => {
                    deferred.resolve();
                })
                .catch((err) => {
                    $.util.log($.util.colors.red(err));
                    deferred.reject();
                });
        } catch (err) {
            $.util.log($.util.colors.red(err));
        }
        return deferred.promise;
    });
};