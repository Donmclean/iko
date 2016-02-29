/**
 * Created by donmclean on 12/14/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('css-deps', () => {
        let deferred = config.vars.Q.defer();

        try {
            gulp.src(config.css.deps)
                .pipe($.plumber(funcs.plumberOptions()))
                .pipe($.debug({title: 'copying and minifying css deps:'}))
                .pipe($.concat(config.css.mainFileName))
                .pipe($.rev())
                .pipe($.autoprefixer())
                .pipe(gulp.dest(config.tempPath))
                .pipe(gulp.dest(config.sass.dest))
                .pipe($.size({showFiles:true}))
                .pipe($.cssnano())
                .pipe($.rename({suffix: '.min'}))
                .pipe($.size({showFiles:true}))
                .pipe(gulp.dest(config.tempPath))
                .pipe(gulp.dest(config.sass.dest))
                .on('error', (err) => {$.util.log($.util.colors.red(err));})
                .on('end', function () {
                    deferred.resolve();
                });
            return deferred.promise;
        }
        catch (err) {
            $.util.log($.util.colors.red(err));
        }
    });
};