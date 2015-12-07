/**
 * Created by donmclean on 12/2/15.
 */

// Variables
const
    gulp            = require('gulp'),
    config          = require('./gulp/gulp.config')(),
    $               = require('gulp-load-plugins')({lazy: true, DEBUG: false, scope: ['devDependencies']}),
    _               = require('lodash'),

    taskPath        = './gulp/tasks/',
    taskList        = require('fs-extra').readdirSync(taskPath),

//********************************************************************************************************
//Load all functions
    funcs           = require('./gulp/functions/funcs')(gulp, $, config, funcs);

//Load all gulp tasks
_.forEach(taskList, function(taskFile) {
    $.util.log('Collecting task: ' + taskFile);
    require(taskPath + taskFile)(gulp, $, config, funcs);
});


//gulp.task('lint', function () {
//    "use strict";
//    gulp.src(basePath+'test.scss')
//    .pipe($.sass().on('error', $.sass.logError))
//    .pipe($.autoprefixer())
//    .pipe(gulp.dest('./'));
//
//});