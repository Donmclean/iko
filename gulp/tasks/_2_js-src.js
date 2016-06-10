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
            .pipe($.if(!!funcs.isProd, jsFilter))
            .pipe($.if(!!funcs.isProd, $.addSrc(config.templates.src)))
            .pipe($.if(!!funcs.isProd, $.jade()))
            .pipe($.if(!!funcs.isProd, $.addSrc(config.templates.srcHTML)))
            .pipe($.if(!!funcs.isProd, $.debug({title: 'angular template caching:'})))
            .pipe($.if(!!funcs.isProd, $.angularTemplatecache('templates.js',{module: config.moduleName, standAlone: false})))
            .pipe($.if(!!funcs.isProd, gulp.dest(config.js.src.destDir)))
            .pipe($.if(!!funcs.isProd, $.debug({title: 'angular template cached file:'})))
            .pipe($.if(!!funcs.isProd, jsFilter.restore))


            .pipe($.concat(config.js.src.mainFileName))
            .pipe($.rev())
            .pipe(gulp.dest(config.js.src.destDir))
            .pipe($.size({showFiles:true}))
            .pipe($.rename({suffix: '.min'}))
            .pipe($.uglify())
            .pipe($.size({showFiles:true}))
            .pipe($.sourcemaps.write())

            .pipe(gulp.dest(config.js.src.destDir));

        // return gulp.src(config.js.deps.src)
        //     // .pipe($.plumber(funcs.plumberOptions()))
        //     .pipe($.debug({title: 'copying and minifying js deps:'}))
        //     .pipe($.concat(config.js.deps.mainFileName))
        //     .pipe($.rev())
        //     // .pipe(gulp.dest(config.tempPath))
        //     .pipe(gulp.dest(config.js.deps.destDir))
        //     .pipe($.size({showFiles:true}))
        //     .pipe($.rename({suffix: '.min'}))
        //     // .pipe($.uglify())
        //     .pipe($.size({showFiles:true}))
        //     // .pipe(gulp.dest(config.tempPath))
        //     .pipe(gulp.dest(config.js.deps.destDir));
    });
};