/**
 * Created by donmclean on 12/8/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('templates', (cb) => {

            setTimeout(() => {
                try {
                    var cssFilter = $.filter("**/*.css"),
                        jsModuleFiles = [],
                        cssModuleFiles = [],
                        tempFiles = config.vars.fs.readdir(config.tempPath, (err, moduleFiles) => {
                            if (err) {
                                $.util.log(err);
                                throw err;
                            }

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

                            $.util.log("----------------------");
                            $.util.log(jsModuleFiles);
                            $.util.log("----------------------");
                            $.util.log("----------------------");
                            $.util.log(cssModuleFiles);
                            $.util.log("----------------------");

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
                                    addPrefix: config.jsSrcs.dest.split(config.dest + '/')[1]
                                }))

                                .pipe($.inject(gulp.src(config.vars._.map(cssModuleFiles, (file) => {
                                    return config.tempPath + '/' + file;
                                })), {
                                    read: false,
                                    ignorePath: config.tempPath.split(process.cwd())[1],
                                    addPrefix: config.sass.dest.split(config.dest + '/')[1]
                                }))
                                .pipe(gulp.dest(config.tempPath))
                                .pipe(gulp.dest(config.templates.dest))
                                .pipe($.livereload());
                            cb();
                        });
                }
                catch (err) {
                    $.util.log(err);
                }
            }, 1000);
        });
};