/**
 * Created by donmclean on 12/14/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('js-srcs', (cb) => {
        setTimeout(() => {
            try {
                if(funcs.isWatching) {
                    var moduleFiles = config.vars.fs.readdirSync(config.jsSrcs.dest);

                    moduleFiles = config.vars._.filter(moduleFiles, (file) => {
                        return file.split('-')[0] === config.moduleName;
                    });
                    config.vars._.forEach(moduleFiles, (file) => {
                        config.vars.fs.removeSync(config.jsSrcs.dest + '/' + file);
                    });
                }
            }
            catch (err) {
                $.util.log(err);
            }

            try {
                gulp.src(config.vars._.flattenDeep([config.jsSrcs.src, config.views.dest + '/templates.js']))
                    .pipe($.sourcemaps.init())
                    .pipe($.ngAnnotate())
                    .pipe($.babel({presets: ['es2015']}))
                    .pipe($.concat(config.moduleName + '.js'))
                    .pipe($.rev())
                    .pipe(gulp.dest(config.tempPath))
                    .pipe(gulp.dest(config.jsSrcs.dest))
                    .pipe($.rename({suffix: '.min'}))
                    .pipe($.uglify())
                    .pipe($.sourcemaps.write())
                    .pipe(gulp.dest(config.tempPath))
                    .pipe(gulp.dest(config.jsSrcs.dest))
                    .pipe($.livereload());
                cb();
            }
            catch (err) {
                $.util.log(err);
            }
        }, 100);
    });
};