/**
 * Created by donmclean on 12/6/15.
 */
module.exports = function (gulp, $) {
    "use strict";
    const funcs = {
        test: function () {
            $.util.log("test funcccs");

        },
        errorHandler: function (err) {
            $.util.log($.util.colors.red("........ : ..................."));
            $.util.log($.util.colors.red("Error in file: "+ err.fileName));
            $.util.log($.util.colors.red("on line  : "+ err.lineNumber));
            $.util.log($.util.colors.red("Error:   : "+ err.message));
            $.util.log($.util.colors.red("........ : ..................."));
        },
        resultsHandler: function (results) {
            $.util.log($.util.colors.red("........ : ..................."));
            $.util.log($.util.colors.yellow('Total Warnings: ' + results.warningCount));

            if (results.errorCount >= 1){
                $.util.log($.util.colors.red('Total Errors: ' + results.errorCount));
            } else {
                $.util.log($.util.colors.green('Total Errors: ' + results.errorCount));
            }
            $.util.log($.util.colors.red("........ : ..................."));
        }
    };

    return funcs;
};