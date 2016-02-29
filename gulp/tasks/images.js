/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('images', () => {
        let deferred = config.vars.Q.defer();
        if(funcs.isProd) {
            gulp.src(config.media.images.src)
                .pipe($.plumber(funcs.plumberOptions()))
                .pipe($.debug({title: 'copying and minifying images:'}))
                .pipe($.imagemin({
                    progressive: true,
                    use: [config.vars.pngquant()]
                }))
                .pipe(gulp.dest(config.media.images.dest))
                .on('error', (err) => {$.util.log($.util.colors.red(err));})
                .on('end', function () {
                    deferred.resolve();
                });
        } else {
            gulp.src(config.media.images.src)
                .pipe($.plumber(funcs.plumberOptions()))
                .pipe($.debug({title: 'copying images:'}))
                .pipe(gulp.dest(config.media.images.dest))
                .on('error', (err) => {$.util.log($.util.colors.red(err));})
                .on('end', function () {
                    deferred.resolve();
                });
        }
        return deferred.promise;
    });
};