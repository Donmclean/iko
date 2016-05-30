/**
 * Created by donmclean on 5/29/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('js-src', () => {

        const
            jsFilter = $.filter(['**.js'], {restore: true});

        return gulp.src(config.js.src.src)
            // .pipe($.plumber(funcs.plumberOptions()))
            .pipe($.sourcemaps.init())
            .pipe($.ngAnnotate())
            .pipe($.babel({presets: ['es2015']}))
            .pipe($.debug({title: 'copying and minifying js srcs:'}))


            //Template Cache Files
            .pipe($.if(true, jsFilter))
            .pipe($.if(true, $.addSrc(config.templates.src)))
            .pipe($.if(true, $.jade()))
            .pipe($.if(true, $.addSrc(config.templates.srcHTML)))
            .pipe($.if(true, $.debug({title: 'angular template caching:'})))
            .pipe($.if(true, $.angularTemplatecache('templates.js',{module: config.moduleName, standAlone: false})))
            .pipe($.if(true, gulp.dest(config.js.src.destDir)))
            .pipe($.if(true, $.debug({title: 'angular template cached file:'})))
            .pipe($.if(true, jsFilter.restore))


            .pipe($.concat(config.js.src.mainFileName + '.js'))
            .pipe($.rev())
            // .pipe(gulp.dest(config.tempPath))
            .pipe(gulp.dest(config.js.src.destDir))
            .pipe($.size({showFiles:true}))
            .pipe($.rename({suffix: '.min'}))
            .pipe($.uglify())
            .pipe($.size({showFiles:true}))
            .pipe($.sourcemaps.write())
            // .pipe(gulp.dest(config.tempPath))
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