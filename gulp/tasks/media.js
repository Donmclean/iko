/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('media', (cb) => {
        config.vars.runSequence('audio','files','fonts','images','videos',cb);
    });
};