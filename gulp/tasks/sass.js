/**
 * Created by donmclean on 12/5/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('sass', (cb) => {
        //setTimeout(() => {

        var deffered = config.vars.Q.defer();

        var run = () => {

            try {
                console.log("funcs.isWatching: ", funcs.isWatching);
                if(funcs.isWatching) {
                    var readStyles = (() => {
                        return config.vars.Q.fcall(config.vars.fs.readdirSync,config.sass.dest);
                    });

                    readStyles.then((moduleFiles) => {
                        config.vars._.filter(moduleFiles, (file) => {
                            return file.split('-')[0] === 'styles';
                        });
                    }).then((moduleFiles) => {
                        config.vars._.forEach(moduleFiles, (file) => {
                            config.vars.fs.removeSync(config.sass.dest + '/' + file);
                        });
                    }).then(() => {
                        console.log("done!!!");
                    });
                    //var moduleFiles = config.vars.fs.readdirSync(config.sass.dest);

                    //moduleFiles = config.vars._.filter(moduleFiles, (file) => {
                    //    return file.split('-')[0] === 'styles';
                    //});
                    //config.vars._.forEach(moduleFiles, (file) => {
                    //    config.vars.fs.removeSync(config.sass.dest + '/' + file);
                    //});
                }
            }
            catch (err) {
                $.util.log($.util.colors.red(err));
            }

            deffered.resolve();
            return deffered.promise;
        };

        run().then(() =>{
            try {
                return gulp.src(config.sass.src)
                    .pipe($.plumber())
                    .pipe($.sourcemaps.init())
                    .pipe($.scssLint())
                    .pipe($.scssLint.failReporter('E'))
                    .pipe($.sass().on('error', funcs.sassErrorHandler))
                    .pipe($.addSrc(config.css.src))
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
                    .pipe($.livereload());
            }
            catch (err) {
                $.util.log($.util.colors.red(err));
            }
        }).then(() => {
            cb();
        });





        //}, 1000);
    });
};

