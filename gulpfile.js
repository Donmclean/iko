/**
 * Created by donmclean on 12/2/15.
 */
/* jshint unused: false */
/* globals _ : true, $ : true */
"use strict";

// Load config
const
    config          = require('./gulp/gulp.config')(),

// Load functions
    funcs           = require(config.baseDir +'/gulp/functions')(config.vars.gulp, config.vars.$, config);

// Define/Collect all tasks
config.vars._.forEach(config.taskList, (file) => {

    config.vars.logi.mixed([{value: "Collecting task:"}, {color: 'yellow', value: file.split('.')[0]}]);
    
    if(file !== '.DS_Store') {
        console.log('config.taskDir + file', config.taskDir + file);
        require(config.taskDir + file)(config.vars.gulp, config.vars.$, config, funcs);
    }

    // require(config.taskDir + file)(config.vars.gulp, config.vars.$, config, funcs);
});

