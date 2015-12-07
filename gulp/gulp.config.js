/**
 * Created by donmclean on 12/2/15.
 */
module.exports = function () {
    "use strict";
    const config = {
        test                : "hello world!",
        basePath            : process.cwd()+'/',
        vars                : require('./variables')(),
        gulpFile            : './gulpfile.js',
        gulpFiles           : [
            './gulpfile.js',
            'gulp/**/**.*js'
        ],
        jsSources           : [
            'src/js/**.*js'
    ],
        jsDependencies      : [

        ]
    };

    return config;

};