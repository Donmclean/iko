/**
 * Created by donmclean on 12/29/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('run-integration-tests', () => {
        funcs.isIntegrationTest = true;
        var deferred = config.vars.Q.defer();

        gulp.src('')
            .pipe($.plumber(funcs.plumberOptions()))
            .pipe($.debug({title: 'running integration tests:'}))
            // .pipe($.nightwatch({
            //     configFile: './nightwatch.json',
            //     cliArgs: {
            //         env: 'chrome',
            //         verbose: true
            //     }
            // }))
            // .pipe($.nightwatch({
            //     configFile: './nightwatch.json',
            //     cliArgs: {
            //         env: 'firefox',
            //         verbose: true
            //     }
            // }))
            // .pipe($.nightwatch({
            //     configFile: './nightwatch.json',
            //     cliArgs: {
            //         env: 'safari',
            //         verbose: true
            //     }
            // }))
            // .pipe($.nightwatch({
            //     configFile: './nightwatch.json',
            //     cliArgs: {
            //         env: 'browserstack-chrome',
            //         verbose: true
            //     }
            // }))
            // .pipe($.nightwatch({
            //     configFile: './nightwatch.json',
            //     cliArgs: {
            //         env: 'browserstack-firefox',
            //         verbose: true
            //     }
            // }))
            // .pipe($.nightwatch({
            //     configFile: './nightwatch.json',
            //     cliArgs: {
            //         env: 'browserstack-safari',
            //         verbose: true
            //     }
            // }))
            // .pipe($.nightwatch({
            //     configFile: './nightwatch.json',
            //     cliArgs: {
            //         env: 'browserstack-ie10',
            //         verbose: true
            //     }
            // }))
            // .pipe($.nightwatch({
            //     configFile: './nightwatch.json',
            //     cliArgs: {
            //         env: 'browserstack-ie11',
            //         verbose: true
            //     }
            // }))
            .pipe($.nightwatch({
                configFile: './nightwatch.json',
                cliArgs: {
                    env: 'browserstack-ipad2',
                    verbose: true
                }
            }))
            .on('error', (err) => {$.util.log($.util.colors.red(err));})
            .on('end', function () {
                deferred.resolve();
            });

        // try {
        //     funcs.startTests(true, false, false, true)
        //         .then(() => {
        //             deferred.resolve();
        //         })
        //         .catch((err) => {
        //             $.util.log($.util.colors.red(err));
        //         });
        //     return deferred.promise;
        // }
        // catch (err) {
        //     $.util.log($.util.colors.red(err));
        //     config.vars.exec(process.exit(1));
        // }
    });
};