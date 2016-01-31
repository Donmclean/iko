/**
 * Created by donmclean on 12/8/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('templates', () => {
        var deferred = config.vars.Q.defer();
            try {
                if (funcs.isWatching) {
                    var filter = $.filter("**/*.css"),
                        jsFiles, cssFiles;

                    config.vars.qfs.list(config.jsSrcs.dest)
                        .then((js) => {
                            jsFiles = config.vars._.filter(js, (file) => {
                                return file.split('.')[1] === 'min';
                            });
                        });
                    config.vars.qfs.list(config.sass.dest)
                        .then((css) => {
                            cssFiles = config.vars._.filter(css, (file) => {
                                return file.split('.')[1] === 'min';
                            });
                        })
                        .then(() => {
                            gulp.src(config.templates.src)
                                .pipe($.plumber())
                                .pipe($.jade())
                                .pipe(gulp.dest(config.templates.dest))
                                .pipe(filter)
                                .pipe($.addSrc(config.templates.main))
                                .pipe($.jade())
                                .pipe($.addSrc(config.templates.mainHtml))
                                .pipe($.inject(gulp.src(config.vars._.map(jsFiles, (file) => {
                                    return config.jsSrcs.dest + '/' + file;
                                })), {
                                    read: false,
                                    ignorePath: config.jsSrcs.dest.split(process.cwd())[1],
                                    addPrefix: config.jsSrcs.dest.split(config.dest + '/')[1]
                                }))

                                .pipe($.inject(gulp.src(config.vars._.map(cssFiles, (file) => {
                                    return config.sass.dest + '/' + file;
                                })), {
                                    read: false,
                                    ignorePath: config.sass.dest.split(process.cwd())[1],
                                    addPrefix: config.sass.dest.split(config.dest + '/')[1]
                                }))
                                .pipe(gulp.dest(config.tempPath))
                                .pipe(gulp.dest(config.templates.dest))
                                .pipe($.debug({title: 'copying and minifying templates:'}))
                                .pipe($.livereload())
                                .on('error', (err) => {$.util.log($.util.colors.red(err));})
                                .on('end', function () {
                                    deferred.resolve();
                                });
                        });
                    return deferred.promise;
                } else {
                    var cssFilter = $.filter("**/*.css");

                    config.vars.qfs.list(config.tempPath)
                        .then((moduleFiles) => {
                            var obj = {};
                            obj.jsModuleFiles = config.vars._.filter(moduleFiles, (file) => {
                                return config.vars.path.extname(file) === '.js';
                            });
                            obj.jsModuleFiles = config.vars._.filter(obj.jsModuleFiles, (file) => {
                                return file.split('-')[0] === config.moduleName ||
                                    file.split('-')[0] === config.jsDeps.mainFileName.split('.')[0];
                            });
                            obj.cssModuleFiles = config.vars._.filter(moduleFiles, (file) => {
                                return config.vars.path.extname(file) === '.css';
                            });
                            return obj;
                        })
                        .then((obj) => {
                            if (funcs.isProd) {
                                obj.jsModuleFiles = config.vars._.filter(obj.jsModuleFiles, (file) => {
                                    return file.split('.')[1] === 'min';
                                });
                                obj.cssModuleFiles = config.vars._.filter(obj.cssModuleFiles, (file) => {
                                    return file.split('.')[1] === 'min';
                                });
                            } else {
                                obj.jsModuleFiles = config.vars._.filter(obj.jsModuleFiles, (file) => {
                                    return file.split('.')[1] === 'js' ||
                                        file.split('-')[0] === config.jsDeps.mainFileName.split('.')[0];
                                });
                                obj.cssModuleFiles = config.vars._.filter(obj.cssModuleFiles, (file) => {
                                    return file.split('.')[1] === 'css';
                                });
                            }
                            return obj;
                        })
                        .then((obj) => {
                            gulp.src(config.templates.src)
                                .pipe($.plumber())
                                .pipe($.jade())
                                .pipe(gulp.dest(config.templates.dest))
                                .pipe(cssFilter)
                                .pipe($.addSrc(config.templates.main))
                                .pipe($.jade())
                                .pipe($.addSrc(config.templates.mainHtml))
                                .pipe($.inject(gulp.src(config.vars._.map(obj.jsModuleFiles, (file) => {
                                    return config.tempPath + '/' + file;
                                })), {
                                    read: false,
                                    ignorePath: config.tempPath.split(process.cwd())[1],
                                    addPrefix: config.jsSrcs.dest.split(config.dest + '/')[1],
                                    removeTags: true
                                }))

                                .pipe($.inject(gulp.src(config.vars._.map(obj.cssModuleFiles, (file) => {
                                    return config.tempPath + '/' + file;
                                })), {
                                    read: false,
                                    ignorePath: config.tempPath.split(process.cwd())[1],
                                    addPrefix: config.sass.dest.split(config.dest + '/')[1],
                                    removeTags: true
                                }))

                                .pipe($.injectString.before('</body>',funcs.webSrcInjector()))

                                .pipe(gulp.dest(config.tempPath))
                                .pipe(gulp.dest(config.templates.dest))
                                .pipe($.debug({title: 'copying and minifying templates:'}))
                                .pipe($.livereload())
                                .on('error', (err) => {$.util.log($.util.colors.red(err));})
                                .on('end', function () {
                                    deferred.resolve();
                                });
                        })
                        .catch((err) => {
                            $.util.log($.util.colors.red(err));
                        });
                    return deferred.promise;
                }
            }
            catch (err) {
                $.util.log($.util.colors.red(err));
            }
        });
};