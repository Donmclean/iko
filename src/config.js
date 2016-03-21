/**
 * Created by donmclean on 2/29/16.
 */

module.exports = () => {
    "use strict";

    const config = {};

    config.sitePrefix   = '';
    config.basePath     = process.cwd();
    config.vendor       = {};
    config.vendor.js    = config.basePath+'/src/vendor/js';
    config.vendor.css   = config.basePath+'/src/vendor/css';

    //JS DEPENDENCIES
    config.jsDeps           = {
        src             : [     config.basePath+'/node_modules/jquery/dist/jquery.js',
                                config.basePath+'/node_modules/angular/angular.js',
                                config.basePath+'/node_modules/angular-ui-router/release/angular-ui-router.js',
                                config.basePath+'/node_modules/lodash/lodash.js',
                                config.basePath+'/node_modules/semantic-ui/dist/semantic.js',
                                config.vendor.js+'/test.js'],
        webSrcs         : [     'https://code.responsivevoice.org/responsivevoice.js']
    };

    //CSS DEPENDENCIES
    config.css              = {
        deps            : [     config.basePath+'/node_modules/semantic-ui/dist/semantic.css',
                                config.vendor.css+'/test.css'],
        webSrcs         : ['']
    };

    return config;
};