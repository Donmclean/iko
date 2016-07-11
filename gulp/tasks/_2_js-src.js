/**
 * Created by donmclean on 5/29/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('js-src', () => {

        const
            jsFilter = $.filter(['**.js'], {restore: true});

        return gulp.src(config.js.src.src)
            .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))
            .pipe($.sourcemaps.init())
            .pipe($.ngAnnotate())
            .pipe($.babel({presets: ['es2015']}))
            .pipe($.debug({title: 'copying and minifying js srcs:'}))


            //Template Cache Files
            .pipe($.if(!!funcs.customBuild.templateCache || !!funcs.isProd, jsFilter))
            .pipe($.if(!!funcs.customBuild.templateCache || !!funcs.isProd, $.addSrc(config.templates.src)))
            .pipe($.if(!!funcs.customBuild.templateCache || !!funcs.isProd, $.jade()))
            .pipe($.if(!!funcs.customBuild.templateCache || !!funcs.isProd, $.addSrc(config.templates.srcHTML)))
            .pipe($.if(!!funcs.customBuild.templateCache || !!funcs.isProd, $.debug({title: 'angular template caching:'})))
            .pipe($.if(!!funcs.customBuild.templateCache || !!funcs.isProd, $.angularTemplatecache('templates.js',{module: config.moduleName, standAlone: false})))
            .pipe($.if(!!funcs.customBuild.templateCache || !!funcs.isProd, $.debug({title: 'angular template cached file:'})))
            .pipe($.if(!!funcs.customBuild.templateCache || !!funcs.isProd, jsFilter.restore))


            .pipe($.concat(config.js.src.mainFileName))
            .pipe($.rev())
            .pipe($.if(!!funcs.customBuild.sourcemaps && !funcs.customBuild.minifyJS, $.sourcemaps.write()))
            .pipe($.if(!!funcs.isCustom && !funcs.customBuild.minifyJS, gulp.dest(config.js.src.destDir)))
            .pipe($.size({showFiles: true}))
            .pipe($.if(!!funcs.customBuild.minifyJS || !!funcs.isProd, $.rename({suffix: '.min'})))
            .pipe($.if(!!funcs.customBuild.minifyJS || !!funcs.isProd, $.uglify()))
            .pipe($.if(!!funcs.customBuild.minifyJS || !!funcs.isProd, $.size({showFiles:true})))
            .pipe($.if(!!funcs.customBuild.minifyJS && !!funcs.customBuild.sourcemaps || !!funcs.isProd, $.sourcemaps.write()))
            .pipe(gulp.dest(config.js.src.destDir));

    });
};