/**
 * Created by donmclean on 5/29/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {

    gulp.task('templates', () => {

        const
            Filter = $.filter(['**/*.css'], {restore: true});

        //Check for changed file
        let changedTemplateFile = [];
        if(config.vars._.isEmpty(config.templates.changed)) {
            changedTemplateFile = config.templates.src;
        } else {
            changedTemplateFile = config.templates.changed;
            config.templates.changed = [];
        }

        //Check if changed file is main index file
        let indexFileChanged = false;
        if(!config.vars._.isEmpty(changedTemplateFile)) {
            if(config.templates.main === changedTemplateFile[0] || config.templates.mainHTML === changedTemplateFile[0]) {
                indexFileChanged = true;
            }
        }

        //run if changed file is NOT main index file
        if(funcs.isWatching && indexFileChanged === false) {
            return gulp.src(changedTemplateFile[0])
                .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))

                //Parse changed file based on template type
                .pipe($.if(config.vars.path.extname(changedTemplateFile) === '.jade',$.jade()))

                .pipe($.debug({title: 'copying and minifying templates:'}))
                .pipe($.if(!!funcs.isDev, gulp.dest(config.tempDir+changedTemplateFile[0].split(config.templates.srcDir)[1].split(config.vars.path.basename(changedTemplateFile[0]))[0])))
                .pipe($.if(!funcs.isDev, gulp.dest(config.templates.destDir+changedTemplateFile[0].split(config.templates.srcDir)[1].split(config.vars.path.basename(changedTemplateFile[0]))[0])));
        } else {
            return gulp.src(config.templates.src)
                .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))

                //Parse & copy all templates *(Minus The Top Level Index File)*
                .pipe($.jade())
                .pipe($.addSrc(config.templates.srcHTML))

                .pipe($.debug({title: 'copying and minifying templates:'}))
                //Filter for Top level Index file
                .pipe(Filter)

                .pipe($.addSrc(config.templates.main))
                .pipe($.jade())
                .pipe($.addSrc(config.templates.mainHTML))
                .pipe($.debug({title: 'copying and minifying Top level templates:'}))
                .pipe($.if(!funcs.isWatching,$.htmlmin({collapseWhitespace: true})))

                //Inject Module Files in Dev Mode
                .pipe($.inject(gulp.src(config.vars._.concat(config.js.deps.src, config.js.src.src, config.vendor.js.src)), {
                    addRootSlash: false,
                    addPrefix: '..'
                    // removeTags: true
                }), {read: false})

                .pipe($.inject(gulp.src(config.vars._.concat(config.css.deps.src, config.vendor.css.src, config.css.src.src, config.sass.tempSrc)), {
                    addRootSlash: false,
                    addPrefix: '..'
                    // removeTags: true
                }), {read: false})



                // .pipe($.inject(gulp.src(config.js.deps.src, {read: false}, file => {
                //     console.log('filex:',file);
                //     // return config.js.deps.destDir + '/' + file;
                // })), {
                //     read: false,
                //     ignorePath: config.srcDir.split(process.cwd())[1],
                //     addPrefix: config.sitePrefix + config.js.deps.destDir.split(config.destDir + '/')[1],
                //     removeTags: true
                // })

                // .pipe($.inject(gulp.src(config.vars._.map(obj.jsModuleFiles, (file) => {
                //     return config.tempPath + '/' + file;
                // })), {
                //     read: false,
                //     ignorePath: config.tempPath.split(process.cwd())[1],
                //     addPrefix: config.sitePrefix + config.jsSrcs.dest.split(config.dest + '/')[1],
                //     removeTags: true
                // }))
                //
                // .pipe($.inject(gulp.src(config.vars._.map(obj.cssModuleFiles, (file) => {
                //     return config.tempPath + '/' + file;
                // })), {
                //     read: false,
                //     ignorePath: config.tempPath.split(process.cwd())[1],
                //     addPrefix: config.sass.dest.split(config.dest + '/')[1],
                //     removeTags: true
                // }))


                //Inject Web Sources
                .pipe($.injectString.before('</body>',funcs.jsWebSrcInjector()))
                .pipe($.injectString.after('<head>',funcs.cssWebSrcInjector()))

                //Restore filtered templates
                .pipe(Filter.restore)

                .pipe($.if(!!funcs.isDev, gulp.dest(config.tempDir)))
                .pipe($.if(!funcs.isDev, gulp.dest(config.templates.destDir)));
        }

    });
};