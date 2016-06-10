/**
 * Created by donmclean on 6/9/16.
 */
"use strict";
module.exports = (config) => {
    let gulpConfig = require(process.cwd() + '/gulp/gulp.config')();

    config.set(gulpConfig.vars._.assign(gulpConfig.tests.karmaConfig,
        {
            files: gulpConfig.vars._.flattenDeep([
                gulpConfig.js.deps.src,
                gulpConfig.tests.ngMocks,
                gulpConfig.js.src.src,
                gulpConfig.tests.all,
                gulpConfig.tests.extras
            ])
        },
        {
            logLevel: config.LOG_INFO,
            captureConsole: true
        },
        {
            // web server port
            //  port: gulpConfig.vars.EXPRESS_PORT
        }));
};