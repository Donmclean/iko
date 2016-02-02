/**
 * Created by donmclean on 12/5/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('sass', () => {
        var deferred = config.vars.Q.defer();

        try {
            if(funcs.isWatching) {
                config.vars.qfs.list(config.sass.dest)
                    .then((moduleFiles) => {
                        $.util.log($.util.colors.cyan(moduleFiles));
                        return config.vars._.filter(moduleFiles, (file) => {
                            return file.split('-')[0] === 'styles';
                        });
                    })
                    .then((moduleFiles) => {
                        $.util.log($.util.colors.cyan(moduleFiles));
                        config.vars._.forEach(moduleFiles, (file) => {
                            funcs.delete("css", config.sass.dest + '/' + file);
                        });
                    })
                    .then(() => {
                        gulp.src(config.sass.src)
                            .pipe($.plumber())
                            .pipe($.sourcemaps.init())
                            .pipe($.scssLint())
                            .pipe($.scssLint.failReporter('E'))
                            .pipe($.sass().on('error', funcs.sassErrorHandler))
                            .pipe($.addSrc(config.css.deps))
                            .pipe($.addSrc(config.css.src))
                            .pipe($.debug({title: 'copying and minifying sass/css:'}))
                            .pipe($.concat('styles.css'))
                            .pipe($.autoprefixer())
                            .pipe($.sourcemaps.write())
                            .pipe($.rev())
                            .pipe(gulp.dest(config.tempPath))
                            .pipe(gulp.dest(config.sass.dest))
                            .pipe($.size({showFiles:true}))
                            .pipe($.rename({suffix: '.min'}))
                            .pipe($.cssnano())
                            .pipe($.size({showFiles:true}))
                            .pipe($.sourcemaps.write())
                            .pipe(gulp.dest(config.tempPath))
                            .pipe(gulp.dest(config.sass.dest))
                            .pipe($.livereload())
                            .on('error', (err) => {$.util.log($.util.colors.red(err));})
                            .on('end', function () {
                                deferred.resolve();
                            });
                    });
                return deferred.promise;
            } else {
                gulp.src(config.sass.src)
                    .pipe($.plumber())
                    .pipe($.sourcemaps.init())
                    .pipe($.scssLint())
                    .pipe($.scssLint.failReporter('E'))
                    .pipe($.sass().on('error', funcs.sassErrorHandler))
                    .pipe($.addSrc(config.css.deps))
                    .pipe($.addSrc(config.css.src))
                    .pipe($.debug({title: 'copying and minifying sass/css:'}))
                    .pipe($.concat('styles.css'))
                    .pipe($.autoprefixer())
                    .pipe($.sourcemaps.write())
                    .pipe($.rev())
                    .pipe(gulp.dest(config.tempPath))
                    .pipe(gulp.dest(config.sass.dest))
                    .pipe($.size({showFiles:true}))
                    .pipe($.rename({suffix: '.min'}))
                    .pipe($.cssnano())
                    .pipe($.sourcemaps.write())
                    .pipe(gulp.dest(config.tempPath))
                    .pipe(gulp.dest(config.sass.dest))
                    .pipe($.size({showFiles:true}))
                    .pipe($.livereload())
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
    });
};

