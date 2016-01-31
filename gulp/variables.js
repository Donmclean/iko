/**
 * Created by donmclean on 12/5/15.
 */
"use strict";
module.exports = () => {
    const vars = {};


    //***********************************************
    //******************BASE*************************
    //***********************************************
    vars.exec           = require('child_process').exec;
    vars.fs             = require('fs-extra');
    vars.Q              = require('q');
    vars.qfs            = require('q-io/fs');
    vars.path           = require('path');
    vars._              = require('lodash');
    vars._.mixin({ 's':   require('underscore.string') });
    //***********************************************
    //******************SERVER***********************
    //***********************************************
    vars.express        = require('express');
    vars.app            = require('express')();
    vars.morgan         = require('morgan');
    vars.app.use(vars.morgan('dev'));
    vars.EXPRESS_PORT   = 3000;
    vars.EXPRESS_ROOT   = process.cwd() + '/app';
    //***********************************************
    //******************GULP*************************
    //***********************************************
    vars.beep           = require('beeper');
    vars.args           = require('yargs').argv;
    vars.pngquant       = require('imagemin-pngquant');
    vars.runSequence    = require('run-sequence');
    vars.browserSync    = require('browser-sync').create();

    return vars;
};
