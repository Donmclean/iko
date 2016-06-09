/**
 * Created by donmclean on 5/30/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('watch', function (cb) {
        funcs.isWatching = true;

        // Watch JS SOURCE files
        let jsWatcher = gulp.watch(config.js.src.src, gulp.series('lint-js-src','run-unit-tests','reload-browser-sync'), done => done);

        jsWatcher.on('change', function(path, stats) {
            funcs.logChangedFile(path);
            config.js.src.changed.push(path);
        });

        // Watch UNIT TEST files
        gulp.watch(config.tests.unit, gulp.series('run-unit-tests'), done => done);

        // Watch TEMPLATE (jade/html) files
        let templateFiles = config.vars._.concat(config.templates.src,config.templates.srcHTML);

        let templateWatcher = gulp.watch( templateFiles, gulp.series('templates','reload-browser-sync'), done => done);
        templateWatcher.on('change', function(path, stats) {
            funcs.logChangedFile(path);
            config.templates.changed.push(path);
        });

        // // Watch SASS files
        gulp.watch(config.sass.watch, gulp.series('sass','reload-browser-sync'), done => done);

        // // Watch CSS files
        gulp.watch(config.css.src.src, gulp.series('sass','reload-browser-sync'), done => done);

        // // Watch Media files
        gulp.watch(config.media.watch, gulp.series('media','reload-browser-sync'), done => done);
        
        cb();
    });
};