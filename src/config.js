/**
 * Created by donmclean on 2/29/16.
 */

module.exports = () => {
    "use strict";

    const config = {};

    config.basePath = process.cwd();

    //JS DEPENDENCIES
    config.jsDeps           = {
        src             : [     config.basePath+'/node_modules/jquery/dist/jquery.js',
                                config.basePath+'/node_modules/angular/angular.js',
                                config.basePath+'/node_modules/angular-ui-router/release/angular-ui-router.js',
                                config.basePath+'/node_modules/lodash/lodash.js',
                                config.basePath+'/node_modules/semantic-ui/dist/semantic.js'],
        webSrcs         : [     'https://code.responsivevoice.org/responsivevoice.js']
    };

    //CSS DEPENDENCIES
    config.css              = {
        deps            : [     config.basePath+'/node_modules/semantic-ui/dist/semantic.css'],
        webSrcs         : ['']
    };

    return config;
};