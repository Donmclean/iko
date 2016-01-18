/**
 * Created by donmclean on 12/16/15.
 */
module.exports = (gulp, $, config, funcs) => {
    'use strict';
    gulp.task('browser-sync', function (cb) {
        config.vars.browserSync.init({
            ui: {
                    port: config.vars.EXPRESS_PORT
                },

            port: config.vars.EXPRESS_PORT,
            proxy: 'localhost:' + config.vars.EXPRESS_PORT,
            logLevel: "info",
            files: config.vars._.flattenDeep([config.templates.dest  + '/**/*.html']),
            reloadOnRestart: false
            //reloadDelay: 1000
        });
        cb();
    });
};