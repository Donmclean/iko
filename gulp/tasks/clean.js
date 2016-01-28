/**
 * Created by donmclean on 12/10/15.
 */
module.exports = (gulp, $, config) => {
    'use strict';
    gulp.task('clean', (cb) => {
        //setTimeout(() => {
            try {
                config.vars.fs.removeSync(config.dest);
            } catch (err) {
                $.util.log($.util.colors.red(err));
            }
            cb();
        //},1000);
    });
};