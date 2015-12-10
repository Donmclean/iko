/**
 * Created by donmclean on 12/6/15.
 */
module.exports = (gulp, $, config) => {
    "use strict";
    const funcs = {
        test: () => {
            $.util.log("test funcccs");

        },
        errorHandler: (err) => {
            config.vars.beep();
            $.util.log($.util.colors.red("........ : ..................."));
            $.util.log($.util.colors.red("Error in file: "+ err.fileName));
            $.util.log($.util.colors.red("on line  : "+ err.lineNumber));
            $.util.log($.util.colors.red("Error:   : "+ err.message));
            $.util.log($.util.colors.red("........ : ..................."));
        },
        sassErrorHandler: (err) => {
            config.vars.beep();
            $.util.log($.util.colors.red("........ : ..................."));
            $.util.log($.util.colors.red(`Error in file (${err.message.split('\n')[0]})`));
            $.util.log($.util.colors.red(`on line ${err.line} column ${err.column}`));
            console.log($.util.colors.red(`\n`+ err.formatted));
            $.util.log($.util.colors.red("........ : ..................."));
            config.vars.exec(process.exit(1));
        },
        resultsHandler: (results) => {
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