/**
 * Created by donmclean on 12/8/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('templates', (cb) => {

            setTimeout(() => {
                try {

                    if (funcs.isWatching) {
                        var filter = $.filter("**/*.css"),
                            jsFiles = config.vars.fs.readdirSync(config.jsSrcs.dest),
                            cssFiles = config.vars.fs.readdirSync(config.sass.dest);

                        jsFiles = config.vars._.filter(jsFiles, (file) => {
                            return file.split('.')[1] === 'min';
                        });
                        cssFiles = config.vars._.filter(cssFiles, (file) => {
                            return file.split('.')[1] === 'min';
                        });

                        gulp.src(config.templates.src)
                            .pipe($.jade())
                            .pipe(gulp.dest(config.templates.dest))
                            .pipe(filter)
                            .pipe($.addSrc(config.templates.main))
                            .pipe($.jade())

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
                            .pipe($.livereload());
                        cb();

                    } else {
                        var cssFilter = $.filter("**/*.css"),
                            jsModuleFiles = [],
                            cssModuleFiles = [],
                            tempFiles = config.vars.fs.readdir(config.tempPath, (err, moduleFiles) => {
                                if (err) {
                                    $.util.log(err);
                                    throw err;
                                } else {
                                    jsModuleFiles = config.vars._.filter(moduleFiles, (file) => {
                                        return config.vars.path.extname(file) === '.js';
                                    });

                                    cssModuleFiles = config.vars._.filter(moduleFiles, (file) => {
                                        return config.vars.path.extname(file) === '.css';
                                    });

                                    jsModuleFiles = config.vars._.filter(jsModuleFiles, (file) => {
                                        return file.split('-')[0] === config.moduleName ||
                                            file.split('-')[0] === config.jsDeps.mainFileName.split('.')[0];
                                    });

                                    if (funcs.isProd) {
                                        jsModuleFiles = config.vars._.filter(jsModuleFiles, (file) => {
                                            return file.split('.')[1] === 'min';
                                        });
                                        cssModuleFiles = config.vars._.filter(cssModuleFiles, (file) => {
                                            return file.split('.')[1] === 'min';
                                        });
                                    } else {
                                        jsModuleFiles = config.vars._.filter(jsModuleFiles, (file) => {
                                            return file.split('.')[1] === 'js' ||
                                                file.split('-')[0] === config.jsDeps.mainFileName.split('.')[0];
                                        });
                                        cssModuleFiles = config.vars._.filter(cssModuleFiles, (file) => {
                                            return file.split('.')[1] === 'css';
                                        });
                                    }

                                    gulp.src(config.templates.src)
                                        .pipe($.jade())
                                        .pipe(gulp.dest(config.templates.dest))
                                        .pipe(cssFilter)
                                        .pipe($.addSrc(config.templates.main))
                                        .pipe($.jade())
                                        .pipe($.inject(gulp.src(config.vars._.map(jsModuleFiles, (file) => {
                                            return config.tempPath + '/' + file;
                                        })), {
                                            read: false,
                                            ignorePath: config.tempPath.split(process.cwd())[1],
                                            addPrefix: config.jsSrcs.dest.split(config.dest + '/')[1],
                                            removeTags: true
                                        }))

                                        .pipe($.inject(gulp.src(config.vars._.map(cssModuleFiles, (file) => {
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
                                        .pipe($.livereload());
                                    cb();
                                }
                            });
                    }
                }
                catch (err) {
                    $.util.log(err);
                }
            }, 1000);
        });
};