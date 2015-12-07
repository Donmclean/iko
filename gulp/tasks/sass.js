/**
 * Created by donmclean on 12/5/15.
 */
module.exports = function(gulp, $, config) {
    "use strict";
    gulp.task('sass', function () {
        $.util.log(config.vars.basePath);
        $.util.log(__dirname);
        return $.util.log("sass!!!");

    });
};

