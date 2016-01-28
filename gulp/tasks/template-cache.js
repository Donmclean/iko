/**
 * Created by donmclean on 12/16/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('template-cache', (cb) => {
        //setTimeout(() => {
            try {
                gulp.src(config.views.src)
                    .pipe($.plumber())
                    .pipe($.jade())
                    .pipe($.angularTemplatecache('templates.js',{module: config.moduleName, standAlone: false, root: config.views.dir}))
                    .pipe(gulp.dest(config.views.dest))
                    .pipe(gulp.dest(config.tempPath))
                    .pipe($.livereload());
                cb();
            }
            catch (err) {
                $.util.log($.util.colors.red(err));
            }
        //},100);
    });
};