/**
 * Created by donmclean on 12/5/15.
 */
module.exports = () => {
    'use strict';
    const vars = {
    //***********************************************
    //******************BASE*************************
    //***********************************************
        exec            : require('child_process').exec,
        fs              : require('fs-extra'),
        path            : require('path'),
        _               : require('lodash'),
    //***********************************************
    //******************SERVER***********************
    //***********************************************
        express         : require('express'),
        app             : require('express')(),
        EXPRESS_PORT    : 3000,
        EXPRESS_ROOT    : process.cwd() + '/app',
    //***********************************************
    //******************GULP*************************
    //***********************************************
        jscs            : require('gulp-jscs'),
        beep            : require('beepbeep'),
        args            : require('yargs').argv,
        map             : require('map-stream'),
        babel           : require("babel-core"),
        async           : require('async'),
        pngquant        : require('imagemin-pngquant'),
        runSequence     : require('run-sequence'),
        browserSync     : require('browser-sync').create()
    };

    return vars;
};
