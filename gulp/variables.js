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
    //***********************************************
    //******************SERVER***********************
    //***********************************************
        app             : require('express')(),
        EXPRESS_PORT    : 3000,
        EXPRESS_ROOT    : __dirname + '/app/',
    //***********************************************
    //******************GULP*************************
    //***********************************************
        jscs            : require('gulp-jscs'),
        beep            : require('beepbeep'),
        wiredep         : require('wiredep').stream
    };

    return vars;
};
