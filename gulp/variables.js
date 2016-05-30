/**
 * Created by donmclean on 5/24/16.
 */
"use strict";
module.exports = () => {
    const vars = {};


    //***********************************************
    //******************BASE*************************
    //***********************************************
    vars.exec           = require('child_process').exec;
    vars.spawn          = require('child_process').spawn;
    vars.fs             = require('fs-extra');
    vars.Q              = require('q');
    vars.qfs            = require('q-io/fs');
    vars.path           = require('path');
    vars.logi           = require('logi')({format: 'gulp'});
    vars._              = require('lodash');
    vars._.mixin({ 's':   require('underscore.string') });
    //***********************************************
    //******************SERVER***********************
    //***********************************************
    vars.express        = require('express');
    vars.app            = require('express')();
    vars.morgan         = require('morgan');
    // vars.app.use(vars.morgan('dev'));
    //***********************************************
    //******************GULP*************************
    //***********************************************
    vars.gulp           = require('gulp');
    vars.$              = require('gulp-load-plugins')({lazy: true, DEBUG: false, scope: ['devDependencies']});
    vars.beep           = require('beeper');
    vars.pngquant       = require('imagemin-pngquant');
    vars.args           = require('yargs').argv;
    vars.browserSync    = require('browser-sync').create();
    vars.moment         = require('moment');

    return vars;
};