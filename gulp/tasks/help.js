/**
 * Created by donmclean on 12/16/15.
 */
module.exports = (gulp, $, config) => {
    "use strict";
    gulp.task('help',$.taskListing.withFilters(() => {
        return false;
    }));
};