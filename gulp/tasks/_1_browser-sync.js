/**
 * Created by donmclean on 5/30/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('browser-sync', () => {

        config.vars.logi.warning('initilaizing BrowserSync...');

        let deferred = config.vars.Q.defer();

        config.vars.browserSync.init({
            ui: {
                port: config.EXPRESS_PORT
            },
            port: config.EXPRESS_PORT,
            proxy: 'localhost:' + config.EXPRESS_PORT + config.destDir.split(process.cwd())[1],
            // files: config.vars._.flattenDeep(config.sass.watch),
            logLevel: "info",
            logPrefix: config.vars.moment(Date.now()).format('HH:mm:ss'),
            reloadOnRestart: true,
            reloadDelay: 1000
        }, () => {
            deferred.resolve();
        });

        return deferred.promise;

    });
};