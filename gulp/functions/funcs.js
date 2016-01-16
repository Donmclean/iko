/**
 * Created by donmclean on 12/6/15.
 */
module.exports = (gulp, $, config) => {
    "use strict";
    const funcs = {};
    funcs.test = () => {
            $.util.log("test funcccs");
        };
    funcs.isProd = false;
    funcs.isUnitTest = false;
    funcs.isIntegrationTest = false;
    funcs.isWatching = false;

    funcs.jshintErrorHandler = (err) => {
        $.util.log($.util.colors.red("................. : ..................."));
        config.vars._.forEach(err, (err) => {
            $.util.log($.util.colors.cyan(`Error:`) + $.util.colors.red(` ${err.file}`) +
                $.util.colors.cyan(` - on - `) + $.util.colors.yellow(`line:`)+ $.util.colors.red(` ${err.error.line}`)+
                $.util.colors.yellow(` col: `) + $.util.colors.red(`${err.error.character}`) +
                $.util.colors.cyan(` Reason:`) + $.util.colors.red(` ${err.error.reason}`)+ $.util.colors.cyan(` ---> `)+ $.util.colors.yellow(`${err.error.evidence}`));
        });
        $.util.log($.util.colors.red("................. : ..................."));
        config.vars.exec(process.exit(1));

    };

    funcs.jshintErrorHandlerNoExit = (err) => {
        $.util.log($.util.colors.red("................. : ..................."));
        config.vars._.forEach(err, (err) => {
            $.util.log($.util.colors.cyan(`Error:`) + $.util.colors.red(` ${err.file}`) +
                $.util.colors.cyan(` - on - `) + $.util.colors.yellow(`line:`)+ $.util.colors.red(` ${err.error.line}`)+
                $.util.colors.yellow(` col: `) + $.util.colors.red(`${err.error.character}`) +
                $.util.colors.cyan(` Reason:`) + $.util.colors.red(` ${err.error.reason}`)+ $.util.colors.cyan(` ---> `)+ $.util.colors.yellow(`${err.error.evidence}`));
        });
        $.util.log($.util.colors.red("................. : ..................."));
        $.util.beep();
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

    funcs.startTests = (singleRun, autoWatch, isUnitTest, isIntegrationTest, cb) => {
        var timeoutLength,
            called = false,
            Server = require('karma').Server,
            excludes = config.tests.karmaConfig.exclude;

        if(singleRun){
            timeoutLength = 0;
        } else {
            timeoutLength = 1000;
        }

        if(isUnitTest) {excludes.push(config.tests.integration);}
        else if(isIntegrationTest) {excludes.push(config.tests.unit);}
        else {excludes = config.tests.karmaConfig.exclude;}

        var server = new Server(config.vars._.assign(
            {configFile: config.tests.karmaConfigFile},
            {singleRun: !!singleRun},
            {autoWatch: !!autoWatch},
            {exclude: excludes}
        ), results => {
            setTimeout(()=> {
                if(!called) {
                    called = true;

                    if(results === 0) {
                        $.util.log($.util.colors.blue("Karma Tests Completed Successfully"));
                        if(autoWatch) {config.vars.exec(process.exit(results)); }
                        cb();

                    } else {
                        $.util.log($.util.colors.red("Karma Tests Failed"));
                        if(singleRun){
                            $.util.log($.util.colors.yellow("Rolling Back......"));
                            try {
                                config.vars.runSequence('clean-temp','clean');
                            } catch (err) {
                                $.util.log($.util.colors.red(err));
                                config.vars.exec(process.exit(results));
                            }
                        } else {
                            cb();
                        }
                    }
                }
            },timeoutLength);
        });

        server.on('browser_error', function (err) {
            $.util.log($.util.colors.red(err));
        });

        server.start();
        if(!singleRun){
            cb();
        }
    };

    funcs.webSrcInjector = () => {
        var tags = config.vars._.map(config.jsDeps.webSrcs, (link) => {
                return `<script src="${link}" type="text/javascript"></script>`;
            });
        return tags.join('');
    };

    return funcs;
};