/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('files', () => {
        let deferred = config.vars.Q.defer();

        gulp.src(config.media.files.src)
            .pipe($.plumber(funcs.plumberOptions()))
            .pipe($.debug({title: 'copying other files:'}))
            .pipe(gulp.dest(config.media.files.dest))
            .on('error', (err) => {$.util.log($.util.colors.red(err));})
            .on('end', function () {
                deferred.resolve();
            });
        return deferred.promise;
    });
};