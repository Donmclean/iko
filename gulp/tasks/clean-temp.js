/**
 * Created by donmclean on 12/10/15.
 */
module.exports = (gulp, $, config) => {
    'use strict';
    gulp.task('clean-temp', (cb) => {
        setTimeout(() => {
            try {
                config.vars.fs.removeSync(config.tempPath);
            } catch (err) {
                $.util.log(err);
            }
            cb();
        },100);
    });
};