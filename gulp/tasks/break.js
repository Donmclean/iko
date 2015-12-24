/**
 * Created by donmclean on 12/22/15.
 */
module.exports = (gulp, $, config) => {
    'use strict';
    gulp.task('break', (cb) => {
        //timeout before calling callback function
        setTimeout(()=>{cb();},400);
    });
};