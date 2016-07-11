/**
 * Created by donmclean on 6/10/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('js-deps', () => {

        return gulp.src(config.js.deps.src)
            .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))
            .pipe($.if(!!funcs.customBuild.sourcemaps || !!funcs.isProd, $.sourcemaps.init()))
            .pipe($.debug({title: 'copying and minifying js deps:'}))
            .pipe($.concat(config.js.deps.mainFileName))
            .pipe($.rev())
            .pipe($.if(!!funcs.customBuild.sourcemaps && !funcs.customBuild.minifyJS, $.sourcemaps.write()))
            .pipe($.if(!!funcs.isCustom && !funcs.customBuild.minifyJS, gulp.dest(config.js.deps.destDir)))
            .pipe($.size({showFiles:true}))
            .pipe($.if(!!funcs.customBuild.minifyJS || !!funcs.isProd, $.rename({suffix: '.min'})))
            .pipe($.if(!!funcs.customBuild.minifyJS || !!funcs.isProd, $.uglify()))
            .pipe($.if(!!funcs.customBuild.minifyJS && !!funcs.customBuild.sourcemaps || !!funcs.isProd, $.sourcemaps.write()))
            .pipe($.if(!!funcs.customBuild.minifyJS || !!funcs.isProd, $.size({showFiles:true})))
            .pipe(gulp.dest(config.js.deps.destDir));

    });
};