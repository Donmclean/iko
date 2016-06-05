/**
 * Created by donmclean on 5/29/16.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {

    gulp.task('templates', () => {

        const
            Filter = $.filter(['**/*.css'], {restore: true});

        //Check for changed files
        let changedTemplateFiles = [];
        if(config.vars._.isEmpty(config.templates.changed)) {
            changedTemplateFiles = config.vars._.concat(config.templates.src,config.templates.srcHTML);
        } else {
            changedTemplateFiles = config.templates.changed;
            config.templates.changed = [];
        }

        return gulp.src(funcs.isWatching ? changedTemplateFiles : config.templates.src)
            .pipe($.plumber({errorHandler: funcs.gulpGlobalErrorHandler}))

            // .pipe($.changed(config.templates.destDir, { extension: '.html'}))

            //Parse & copy all templates *(Minus The Top Level Index File)*
            .pipe($.jade())
            .pipe($.addSrc(config.templates.srcHTML))
            //filter only changed files
            //.pipe($.if(funcs.isWatching, $.changed(config.templates.destDir, { extension: '.html'})))
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

            .pipe(gulp.dest(config.templates.destDir));
    });
};