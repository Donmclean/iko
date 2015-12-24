/**
 * Created by donmclean on 12/16/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('media', (cb) => {
        config.vars.runSequence('audio','files','fonts','images','videos',cb);
    });
};