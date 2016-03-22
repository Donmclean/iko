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
    funcs.errorExitCode = 0;

    funcs.jshintErrorHandler = (err) => {
        config.vars.beep(3);
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
        config.vars.beep();
        $.util.log($.util.colors.red("................. : ..................."));
        config.vars._.forEach(err, (err) => {
            $.util.log($.util.colors.cyan(`Error:`) + $.util.colors.red(` ${err.file}`) +
                $.util.colors.cyan(` - on - `) + $.util.colors.yellow(`line:`)+ $.util.colors.red(` ${err.error.line}`)+
                $.util.colors.yellow(` col: `) + $.util.colors.red(`${err.error.character}`) +
                $.util.colors.cyan(` Reason:`) + $.util.colors.red(` ${err.error.reason}`)+ $.util.colors.cyan(` ---> `)+ $.util.colors.yellow(`${err.error.evidence}`));
        });
        $.util.log($.util.colors.red("................. : ..................."));
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

    funcs.startUnitTests = (singleRun, autoWatch) => {
        var called = false,
            Server = require('karma').Server,
            excludes = config.tests.karmaConfig.exclude,
            deferred = config.vars.Q.defer();

        excludes.push(config.tests.integration);

        var server = new Server(config.vars._.assign(
            {configFile: config.tests.karmaConfigFile},
            {singleRun: !!singleRun},
            {autoWatch: !!autoWatch},
            {exclude: excludes}
        ), results => {
                if(!called) {
                    called = true;

                    if(results === 0) {
                        funcs.unitTestPassed = true;
                        $.util.log($.util.colors.blue("Karma Unit Tests Passed"));
                        deferred.resolve();

                    } else {
                        funcs.unitTestPassed = false;
                        $.util.log($.util.colors.red("Karma Unit Tests Failed"));
                        config.vars.beep(3);
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

    funcs.JsWebSrcInjector = () => {
        var tags = config.vars._.map(config.jsDeps.webSrcs, (link) => {
            $.util.log("Adding js web source:",$.util.colors.blue(link));
                return `<script src="${link}" type="text/javascript"></script>`;
            });
        return tags.join('');
    };
    funcs.CssWebSrcInjector = () => {
        var tags = config.vars._.map(config.css.webSrcs, (link) => {
            $.util.log("Adding css web source:",$.util.colors.blue(link));
            return `<link href="${link}" type="text/css" rel="stylesheet">`;
        });
        return tags.join('');
    };

    funcs.copy = (source, target) => {
        let deferred = config.vars.Q.defer();

        try {
            $.util.log($.util.colors.blue(`Copying ${$.util.colors.yellow(source)} to`), $.util.colors.yellow(target));

            config.vars.qfs.copyTree(source, target)
                .then(() => {
                    $.util.log($.util.colors.red(`${source} copied...`));
                })
                .then(() => {
                    deferred.resolve();
                })
                .catch((err) => {
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
            $.util.log($.util.colors.red(`Cleaning ${name}: `, file));

            config.vars.qfs.remove(file)
                .then(() => {
                    $.util.log($.util.colors.red(`${file} removed...`));
                })
                .then(() => {
                    deferred.resolve();
                })
                .catch((err) => {
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

        config.vars.qfs.isDirectory(path).then((exists) => {
            if(exists) {
                try {
                    $.util.log(`Cleaning ${$.util.colors.red(name)} directory: `, $.util.colors.blue(path));

                    config.vars.qfs.removeTree(path)
                        .then(() => {
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
            } else {
                $.util.log(`${$.util.colors.red(name)} directory does not exist...`);
                deferred.resolve();
            }
        });

        return deferred.promise;
    };

    funcs.plumberOptions = () => {
        //PLUMBERS CALLBACK AFTER TASK
    };

    return funcs;
};