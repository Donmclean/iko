/**
 * Created by donmclean on 5/24/16.
 */

"use strict";
module.exports = () => {

    const baseDir = process.cwd(),

    //**********************************************************************************
    //*****************************************CORE*************************************
    //**********************************************************************************

    config                          = require('../src/config')();
    config.vars                     = require(baseDir+'/gulp/variables')();
    config.packageJsonFile          = baseDir+'/package.json';
    config.taskDir                  = baseDir +'/gulp/tasks/';
    config.taskList                 = config.vars.fs.readdirSync(config.taskDir);
    config.gulpJSCSConfig           = baseDir+'/gulp/json-configs/.jscsrc';
    
    return config;
};