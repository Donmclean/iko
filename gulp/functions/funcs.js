/**
 * Created by donmclean on 12/6/15.
 */
module.exports = (gulp, $, config) => {
    "use strict";
    const funcs = {
        test: () => {
            $.util.log("test funcccs");

        },

        jshintErrorHandler: (err) => {
            $.util.log($.util.colors.red("................. : ..................."));
            config.vars._.forEach(err, (err) => {
                $.util.log($.util.colors.cyan(`Error:`) + $.util.colors.red(` ${err.file}`) +
                    $.util.colors.cyan(` - on - `) + $.util.colors.yellow(`line:`)+ $.util.colors.red(` ${err.error.line}`)+
                    $.util.colors.yellow(` col: `) + $.util.colors.red(`${err.error.character}`) +
                    $.util.colors.cyan(` Reason:`) + $.util.colors.red(` ${err.error.reason}`)+ $.util.colors.cyan(` ---> `)+ $.util.colors.yellow(`${err.error.evidence}`));
            });
            $.util.log($.util.colors.red("................. : ..................."));
            config.vars.exec(process.exit(1));
        },
        errorHandler: (err) => {
            config.vars.beep();
            $.util.log($.util.colors.red("................. : ..................."));
            $.util.log($.util.colors.red("Error in file     : "+ err.fileName));
            $.util.log($.util.colors.red("on line           : "+ err.lineNumber));
            $.util.log($.util.colors.red("Error:            : "+ err.message));
            $.util.log($.util.colors.red("................. : ..................."));
        },
        sassErrorHandler: (err) => {
            config.vars.beep();
            $.util.log($.util.colors.red("................. : ..................."));
            $.util.log($.util.colors.red(`Error in file (${err.message.split('\n')[0]})`));
            $.util.log($.util.colors.red(`on line ${err.line} column ${err.column}`));
            console.log($.util.colors.red(`\n`+ err.formatted));
            $.util.log($.util.colors.red("................. : ..................."));
            config.vars.exec(process.exit(1));
        },
        resultsHandler: (results) => {
            $.util.log($.util.colors.red("................. : ..................."));
            $.util.log($.util.colors.yellow('Total Warnings: ' + results.warningCount));

            if (results.errorCount >= 1){
                $.util.log($.util.colors.red('Total Errors: ' + results.errorCount));
            } else {
                $.util.log($.util.colors.green('Total Errors: ' + results.errorCount));
            }
            $.util.log($.util.colors.red("................. : ..................."));
        },
        parseAngularModules : () => {
            var modules = require('fs-extra').readdirSync(process.cwd()+'/src/js/modules/');
            var moduleFiles = [], modulesContents;
            for (var i = 0; i < modules.length; i++) {
                modulesContents = require('fs-extra').readdirSync(process.cwd()+'/src/js/modules/' + modules[i]);
                for(var k = 0; k < modulesContents.length; k++) {
                    if(modulesContents[k].split(".")[1] === "js"){
                        moduleFiles.push(modulesContents[k]);
                    }
                }
            }
            $.util.log("..........................");
            $.util.log(moduleFiles);
            return moduleFiles;
        }
    };

    return funcs;
};