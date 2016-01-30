/**
 * Created by donmclean on 12/6/15.
 */
"use strict";
module.exports = (gulp, $, config) => {
    const funcs = {};
    funcs.test = () => {
            $.util.log("test funcccs");
        };
    funcs.isProd = false;
    funcs.isUnitTest = false;
    funcs.isIntegrationTest = false;
    funcs.unitTestPassed = false;
    funcs.integrationTestPassed = false;
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

    funcs.startTests = (singleRun, autoWatch, isUnitTest, isIntegrationTest) => {
        var called = false,
            Server = require('karma').Server,
            excludes = config.tests.karmaConfig.exclude,
            deferred = config.vars.Q.defer();

        if(isUnitTest) {excludes.push(config.tests.integration);}
        else if(isIntegrationTest) {excludes.push(config.tests.unit);}
        else {excludes = config.tests.karmaConfig.exclude;}

        var server = new Server(config.vars._.assign(
            {configFile: config.tests.karmaConfigFile},
            {singleRun: !!singleRun},
            {autoWatch: !!autoWatch},
            {exclude: excludes}
        ), results => {
                if(!called) {
                    called = true;

                    if(isUnitTest && results === 0) {
                        funcs.unitTestPassed = true;
                        $.util.log($.util.colors.blue("Karma Unit Tests Passed"));
                        deferred.resolve();

                    } else {
                        funcs.unitTestPassed = false;
                        $.util.log($.util.colors.red("Karma Unit Tests Failed"));
                        deferred.resolve();
                    }

                    if(isIntegrationTest && results === 0) {
                        funcs.integrationTestPassed = true;
                        $.util.log($.util.colors.blue("Karma Integration Tests Completed Successfully"));
                        deferred.resolve();

                    } else if(isIntegrationTest) {
                        funcs.integrationTestPassed = false;
                        $.util.log($.util.colors.red("Karma Integration Tests Failed"));
                        deferred.resolve();
                    }
                }
            return deferred.promise;
        });

        server.start();
        server.on('browser_error', (err) => {
            $.util.log($.util.colors.red(err));

        });

        return deferred.promise;

    };

    funcs.webSrcInjector = () => {
        var tags = config.vars._.map(config.jsDeps.webSrcs, (link) => {
                return `<script src="${link}" type="text/javascript"></script>`;
            });
        return tags.join('');
    };

    funcs.copy = (source, target) => {
        let deferred = config.vars.Q.defer();

        try {
            $.util.log($.util.colors.blue(`Copying ${$.util.colors.yellow(source)} to`), $.util.colors.yellow(target));

            (() => {
                return config.vars.qfs.copyTree(source, target);
            })().then(() => {
                $.util.log($.util.colors.red(`${source} copied...`));
            }).then(() => {
                deferred.resolve();
            }).catch((err) => {
                $.util.log($.util.colors.red(err));
                deferred.reject();
            });
        } catch (err) {
            $.util.log($.util.colors.red(err));
        }
        return deferred.promise;
    };

    funcs.delete = (name, file) => {
        let deferred = config.vars.Q.defer();
        try {
            $.util.log($.util.colors.red(`Cleaning ${name} directory: `, file));

            (() => {
                return config.vars.qfs.remove(file);
            })().then(() => {
                $.util.log($.util.colors.red(`${name} directory removed...`));
            }).then(() => {
                deferred.resolve();
            }).catch((err) => {
                $.util.log($.util.colors.red(err));
                deferred.reject();
            });
        } catch (err) {
            $.util.log($.util.colors.red(err));
        }
        return deferred.promise;
    };

    funcs.deletePath = (name, path) => {
        let deferred = config.vars.Q.defer();
        try {
            $.util.log(`Cleaning ${$.util.colors.red(name)} directory: `, $.util.colors.blue(path));

            (() => {
                return config.vars.qfs.removeTree(path);
            })().then(() => {
                $.util.log(`${$.util.colors.red(name)} directory removed...`);
            }).then(() => {
                deferred.resolve();
            }).catch((err) => {
                $.util.log($.util.colors.red(err));
                deferred.reject();
            });
        } catch (err) {
            $.util.log($.util.colors.red(err));
        }
        return deferred.promise;
    };

    return funcs;
};