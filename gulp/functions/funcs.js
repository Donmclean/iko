/**
 * Created by donmclean on 12/6/15.
 */
module.exports = (gulp, $, config) => {
    "use strict";
    const funcs = {
        test: () => {
            $.util.log("test funcccs");
        },
        isProd: false,
        isWatching: false,

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

        sassErrorHandler: (err) => {
            config.vars.beep();
            $.util.log($.util.colors.red("................. : ..................."));
            $.util.log($.util.colors.red(`Error in file (${err.message.split('\n')[0]})`));
            $.util.log($.util.colors.red(`on line ${err.line} column ${err.column}`));
            console.log($.util.colors.red(`\n`+ err.formatted));
            $.util.log($.util.colors.red("................. : ..................."));
            config.vars.exec(process.exit(1));
        },

        startTests: (singleRun, autoWatch, isUnitTest, isIntegrationTest, cb) => {
            var Server = require('karma').Server,
                excludes = config.tests.karmaConfig.exclude;

            if(isUnitTest) {excludes.push(config.tests.unit);}
            if(isIntegrationTest) {excludes.push(config.tests.integration);}

            $.util.log(singleRun, autoWatch, isUnitTest, isIntegrationTest);

            var server = new Server(config.vars._.assign(
                {configFile: config.tests.karmaConfigFile},
                {singleRun: singleRun},
                {autoWatch: autoWatch}
                //{exclude: excludes}
            ), results => {

                $.util.log("Karma Tests Completed:", results);
                if(results === 1) {
                    config.vars.exec(process.exit(1));
                }
            });

            server.on('browser_error', function (err) {
                $.util.log(err);
            });

            server.start();
            cb();
        }
    };

    return funcs;
};