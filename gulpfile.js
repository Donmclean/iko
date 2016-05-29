/**
 * Created by donmclean on 12/2/15.
 */
/* jshint unused: false */
/* globals _ : true, $ : true */
"use strict";

// Load config
const
    config          = require('./gulp/gulp.config')(),
    args            = process.argv.slice(2),

// Load functions
    funcs           = require(config.baseDir +'/gulp/functions')(config.vars.gulp, config.vars.$, config);

// Process Gulp Arguments
const isValidArgs = funcs.processGulpArgs(args);

if(isValidArgs) {
    // Define/Collect all tasks
    config.vars._.forEach(config.taskList, (file) => {

        config.vars.logi.mixed([{value: "Collecting task:"}, {color: 'yellow', value: file.split('.')[0]}]);

        require(config.taskDir + file)(config.vars.gulp, config.vars.$, config, funcs);
    });
}
