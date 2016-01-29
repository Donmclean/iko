/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config) => {
    gulp.task('help',$.taskListing.withFilters(() => {
        return false;
    }));
};