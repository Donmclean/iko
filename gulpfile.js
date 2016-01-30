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
    arg             = process.argv[2],

//********************************************************************************************************
//Load all functions
    funcs           = require('./gulp/functions/funcs')(gulp, $, config);

if (arg === 'build-dev' || arg === 'build-prod' || arg === 'watch' || arg === undefined) {
    _.forEach(taskList, (file) => {
            $.util.log('Collecting task: ' + $.util.colors.yellow(file.split('.')[0]));
            require(taskPath + file)(gulp, $, config, funcs);
    });
    if (arg === undefined) {
        require(taskPath + 'default')(gulp, $, config, funcs);
    } else {
        require(taskPath + process.argv[2])(gulp, $, config, funcs);
    }

} else if (arg === 'help') {
    _.forEach(taskList, (file) => {
        if (file.split('.')[0] !== 'help') {
            require(taskPath + file)(gulp, $, config, funcs);
        }
    });
    require(taskPath + arg)(gulp, $, config, funcs);
} else {
    require(taskPath + arg)(gulp, $, config, funcs);
}