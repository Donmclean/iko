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
            server: !!funcs.isCustom ? config.destDir : !!funcs.isDev ? [config.tempDir,config.baseDir] : [config.destDir,config.baseDir],
            // server: [config.destDir,config.baseDir],
            //proxy: 'localhost:' + config.EXPRESS_PORT + config.destDir.split(process.cwd())[1],
            open: "external",
            logLevel: "info",
            logPrefix: config.vars.moment(Date.now()).format('HH:mm:ss'),
            reloadOnRestart: true
        }, () => {
            deferred.resolve();
        });

        return deferred.promise;

    });
};