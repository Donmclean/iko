/**
 * Created by donmclean on 12/14/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('js-srcs', () => {
        let deferred = config.vars.Q.defer();

        var runTask = () => {
            try {
                if(!funcs.isProd) {
                    gulp.src(config.vars._.flattenDeep([config.jsSrcs.src, config.views.dest + '/templates.js']))
                        .pipe($.plumber())
                        .pipe($.sourcemaps.init())
                        .pipe($.ngAnnotate())
                        .pipe($.babel({presets: ['es2015']}))
                        .pipe($.concat(config.moduleName + '.js'))
                        .pipe($.rev())
                        .pipe(gulp.dest(config.tempPath))
                        .pipe(gulp.dest(config.jsSrcs.dest))
                        .pipe($.size({showFiles:true}))
                        .pipe($.rename({suffix: '.min'}))
                        .pipe($.uglify())
                        .pipe($.sourcemaps.write())
                        .pipe(gulp.dest(config.tempPath))
                        .pipe(gulp.dest(config.jsSrcs.dest))
                        .pipe($.size({showFiles:true}))
                        .pipe($.livereload())
                        .on('error', (err) => {$.util.log($.util.colors.red(err));})
                        .on('end', function () {
                            deferred.resolve();
                        });
                    return deferred.promise;
                } else {
                    gulp.src(config.vars._.flattenDeep([config.jsSrcs.src, config.views.dest + '/templates.js']))
                        .pipe($.plumber())
                        .pipe($.ngAnnotate())
                        .pipe($.babel({presets: ['es2015']}))
                        .pipe($.concat(config.moduleName + '.js'))
                        .pipe($.rev())
                        .pipe(gulp.dest(config.tempPath))
                        .pipe(gulp.dest(config.jsSrcs.dest))
                        .pipe($.size({showFiles:true}))
                        .pipe($.rename({suffix: '.min'}))
                        .pipe($.uglify())
                        .pipe(gulp.dest(config.tempPath))
                        .pipe(gulp.dest(config.jsSrcs.dest))
                        .pipe($.size({showFiles:true}))
                        .on('error', (err) => {$.util.log($.util.colors.red(err));})
                        .on('end', function () {
                            deferred.resolve();
                        });
                    return deferred.promise;
                }
            }
            catch (err) {
                $.util.log($.util.colors.red(err));
            }
        };

        try {
            if(funcs.isWatching) {
                config.vars.qfs.list(config.jsSrcs.dest)
                    .then((moduleFiles) => {
                        $.util.log($.util.colors.green(moduleFiles));
                        return config.vars._.filter(moduleFiles, (file) => {
                            return file.split('-')[0] === config.moduleName;
                        });
                    })
                    .then((moduleFiles) => {
                        config.vars._.forEach(moduleFiles, (file) => {
                            funcs.delete("old Module", config.jsSrcs.dest + '/' + file);
                        });
                    })
                    .then(() => {
                        runTask();
                    })
                    .catch((err) => {
                        $.util.log($.util.colors.red(err));
                });
            } else {
                runTask();
            }
        }
        catch (err) {
            $.util.log($.util.colors.red(err));
        }
    });
};