/**
 * Created by donmclean on 5/24/16.
 */
"use strict";

module.exports = (gulp, $, config) => {
    const funcs = {};

    funcs.test = () => {
        
        config.vars.logi.log("in functions", 'test?');
    };

    funcs.processGulpArgs = (args) => {
        config.vars.logi.info("processing GulpArgs...", args);

        return true;
    };

    funcs.jshintErrorHandler = (err, doExit) => {

        if(!!doExit) {
            config.vars.beep(3);
        } else {
            config.vars.beep();
        }

        $.util.log($.util.colors.red("................. : ..................."));
        config.vars._.forEach(err, (err) => {
            $.util.log($.util.colors.cyan(`Error:`) + $.util.colors.red(` ${err.file}`) +
                $.util.colors.cyan(` - on - `) + $.util.colors.yellow(`line:`)+ $.util.colors.red(` ${err.error.line}`)+
                $.util.colors.yellow(` col: `) + $.util.colors.red(`${err.error.character}`) +
                $.util.colors.cyan(` Reason:`) + $.util.colors.red(` ${err.error.reason}`)+ $.util.colors.cyan(` ---> `)+ $.util.colors.yellow(`${err.error.evidence}`));
        });
        $.util.log($.util.colors.red("................. : ..................."));

        if(!!doExit) {
            config.vars.exec(process.exit(1));
        }

    };

    funcs.sassErrorHandler = (err) => {
        config.vars.beep();
        $.util.log($.util.colors.red("................. : ..................."));
        $.util.log($.util.colors.red(`Error in file (${err.message.split('\n')[0]})`));
        $.util.log($.util.colors.red(`on line ${err.line} column ${err.column}`));
        console.log($.util.colors.red(`\n`+ err.formatted));
        $.util.log($.util.colors.red("................. : ..................."));
        config.vars.exec(process.exit(1));
    };

    return funcs;
};