/**
 * Created by donmclean on 12/2/15.
 */
/* jshint unused: false */
/* globals _ : true, $ : true */
"use strict";
// Variables
const
    gulp            = require('gulp'),
    config          = require('./gulp/gulp.config')(),
    $               = require('gulp-load-plugins')({lazy: true, DEBUG: false, scope: ['devDependencies']}),
    _               = require('lodash'),

    taskPath        = process.cwd()+'/gulp/tasks/',
    taskList        = require('fs-extra').readdirSync(taskPath),

//********************************************************************************************************
//Load all functions
    funcs           = require('./gulp/functions/funcs')(gulp, $, config);

//Load all gulp tasks
_.forEach(taskList, (taskFile) => {
    $.util.log('Collecting task: ' + taskFile);
    require(taskPath + taskFile)(gulp, $, config, funcs);
});