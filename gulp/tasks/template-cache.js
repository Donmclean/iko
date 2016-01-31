/**
 * Created by donmclean on 12/16/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('template-cache', () => {
        var deferred = config.vars.Q.defer();

            try {
                gulp.src(config.views.src)
                    .pipe($.plumber())
                    .pipe($.jade())
                    .pipe($.addSrc(config.views.htmlSrc))
                    .pipe($.debug({title: 'angular template caching:'}))
                    .pipe($.angularTemplatecache('templates.js',{module: config.moduleName, standAlone: false, root: config.views.dir}))
                    .pipe(gulp.dest(config.views.dest))
                    .pipe(gulp.dest(config.tempPath))
                    .pipe($.livereload())
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