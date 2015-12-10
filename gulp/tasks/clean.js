/**
 * Created by donmclean on 12/10/15.
 */
module.exports = (gulp, $, config) => {
    'use strict';
    gulp.task('clean', () => {
        try {
            config.vars.fs.removeSync(config.dest);
        } catch (err) {
            console.log(err);
        }
    });
};