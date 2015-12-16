/**
 * Created by donmclean on 12/14/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('js-srcs', (cb) => {

        config.vars._.forEach(funcs.parseAngularModules(), (angularModule) => {
            var moduleFile = process.cwd()+'/src/js/modules/' + angularModule.split(".")[0] + '/' + angularModule;
            gulp.src([moduleFile, process.cwd()+'/src/js/modules/' + angularModule.split(".")[0] + '/**/*.js'])
                .pipe($.sourcemaps.init())
                .pipe($.ngAnnotate())
                .pipe($.babel({presets: ['es2015']}))
                //.pipe($.addsrc())
                .pipe($.concat(angularModule))
                .pipe(gulp.dest(config.jsSrcs.dest + `/${angularModule.split(".")[0]}`))
                .pipe($.rename({suffix: '.min'}))
                .pipe($.uglify())
                .pipe($.sourcemaps.write())
                .pipe(gulp.dest(config.jsSrcs.dest + `/${angularModule.split(".")[0]}`))
                .pipe($.livereload());
            //, process.cwd()+`/src/js/modules/${angularModule.split(".")[0]}/**/*.js`
        });
        cb();
    });
};