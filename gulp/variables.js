/**
 * Created by donmclean on 12/5/15.
 */
module.exports = () => {
    'use strict';
    const vars = {};


    //***********************************************
    //******************BASE*************************
    //***********************************************
    vars.exec           = require('child_process').exec;
    vars.fs             = require('fs-extra');
    vars.path           = require('path');
    vars._              = require('lodash');
    vars._.mixin({ 's':   require('underscore.string') });
    //***********************************************
    //******************SERVER***********************
    //***********************************************
    vars.express        = require('express');
    vars.app            = require('express')();
    vars.EXPRESS_PORT   = 3000;
    vars.EXPRESS_ROOT   = process.cwd() + '/app';
    //***********************************************
    //******************GULP*************************
    //***********************************************
    vars.jscs           = require('gulp-jscs');
    vars.beep           = require('beepbeep');
    vars.args           = require('yargs').argv;
    vars.map            = require('map-stream');
    vars.babel          = require("babel-core");
    vars.async          = require('async');
    vars.pngquant       = require('imagemin-pngquant');
    vars.runSequence    = require('run-sequence');
    vars.browserSync    = require('browser-sync').create();

    return vars;
};
