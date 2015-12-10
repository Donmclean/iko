/**
 * Created by donmclean on 12/2/15.
 */
module.exports = () => {
    "use strict";
    const config = {
        test                : "hello world!",
        basePath            : process.cwd()+'/',
        dest                : process.cwd()+'/app',
        vars                : require('./variables')(),
        gulpFile            : './gulpfile.js',
        gulpFiles           : ['./gulpfile.js', 'gulp/**/*.js'],
        jsSources           : ['src/js/**/*.js'],
        jsDependencies      : [],

        bower               : {
            json            : require(process.cwd()+'/bower.json'),
            directory       : process.cwd()+'/bower_components',
            ignorePath      : '../'
        },

        js                  : {
            src             : [     process.cwd()+'/src/js/**/*.js'],
            dest            :       process.cwd()+'/app/assets/js'
        },

        sass                : {
            src             : [     process.cwd()+'/src/sass/**/styles.scss'],
            dest            :       process.cwd()+'/app/assets/css'
        },

        templates           : {
            src             : [     process.cwd()+'/src/templates/**/**/*.jade'],
            dest            :       process.cwd()+'/app'
        }
    };

    return config;

};