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
        map             : require('map-stream'),
        async           : require('async')
    };

    return vars;
};
