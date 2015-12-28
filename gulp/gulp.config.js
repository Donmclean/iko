/**
 * Created by donmclean on 12/2/15.
 */
module.exports = () => {
    "use strict";

    const config = {
        moduleName          :       'iko',
        basePath            :       process.cwd(),
        tempPath            :       process.cwd()+'/temp',
        dest                :       process.cwd()+'/app',
        vars                :       require(process.cwd()+'/gulp/variables')(),
        mainFileName        :       'index.html',
        packageFile         :       process.cwd()+'/package.json',
        gulpFile            :       process.cwd()+'/gulpfile.js',
        gulpFiles           : [     process.cwd()+'/gulpfile.js', process.cwd()+'/gulp/**/*.js'],


        jsDeps              : {
            mainFileName    :       'deps.js',
            src             : [     process.cwd()+'/node_modules/jquery/dist/jquery.js',
                                    process.cwd()+'/node_modules/angular/angular.js',
                                    process.cwd()+'/node_modules/angular-ui-router/release/angular-ui-router.js',
                                    process.cwd()+'/node_modules/lodash/index.js'],
            webSrcs         :       '',
            dest            :       process.cwd()+'/app/assets/js'
        },

        jsSrcs              : {
            src             : [     process.cwd()+'/src/js/**/*.js'],
            dest            :       process.cwd()+'/app/assets/js',
            templateCache   :       process.cwd()+'/temp/templates.js'
        },

        sass                : {
            mainFileName    :       'styles.css',
            watch           : [     process.cwd()+'/src/sass/**/*.scss'],
            src             : [     process.cwd()+'/src/sass/styles.scss'],
            dest            :       process.cwd()+'/app/assets/css'
        },

        templates           : {
            main            :       process.cwd()+'/src/templates/index.jade',
            src             : [     process.cwd()+'/src/templates/**/*.jade'],
            dest            :       process.cwd()+'/app'
        },

        views               : {
            dir             :       'views/',
            main            :       process.cwd()+'/src/templates/views/**/*.jade',
            src             : [     process.cwd()+'/src/templates/views/**/*.jade'],
            dest            :       process.cwd()+'/app/assets/js'
        },

        media               : {
            images          : {
                src         : [     process.cwd()+'/src/media/images/*'],
                dest        :       process.cwd()+'/app/assets/media/images'
            },
            videos          : {
                src         : [     process.cwd()+'/src/media/videos/*'],
                dest        :       process.cwd()+'/app/assets/media/videos'
            },
            audio           : {
                src         : [     process.cwd()+'/src/media/audio/*'],
                dest        :       process.cwd()+'/app/assets/media/audio'
            },
            files           : {
                src         : [     process.cwd()+'/src/media/files/*'],
                dest        :       process.cwd()+'/app/assets/media/files'
            },
            fonts           : {
                src         : [     process.cwd()+'/src/media/fonts/*'],
                dest        :       process.cwd()+'/app/assets/media/fonts'
            }
        }
    };

    return config;

};