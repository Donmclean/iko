/**
 * Created by donmclean on 12/2/15.
 */
module.exports = () => {
    "use strict";

    const config = {
        test                :       "hello world!",
        basePath            :       process.cwd()+'/',
        dest                :       process.cwd()+'/app',
        vars                :       require('./variables')(),
        gulpFile            :       process.cwd()+'/gulpfile.js',
        gulpFiles           : [     process.cwd()+'/gulpfile.js', process.cwd()+'/gulp/**/*.js'],


        jsDeps              : {
            src             : [     process.cwd()+'/node_modules/jquery/dist/jquery.js',
                                    process.cwd()+'/node_modules/angular/angular.js',
                                    process.cwd()+'/node_modules/angular-ui-router/release/angular-ui-router.js',
                                    process.cwd()+'/node_modules/lodash/index.js'],
            dest            :       process.cwd()+'/app/assets/js'
        },

        jsSrcs              : {
            src             :       '',
            dest            :       process.cwd()+'/app/assets/js'
        },

        sass                : {
            watch           : [     process.cwd()+'/src/sass/**/*.scss'],
            src             : [     process.cwd()+'/src/sass/**/styles.scss'],
            dest            :       process.cwd()+'/app/assets/css'
        },

        templates           : {
            src             : [     process.cwd()+'/src/templates/**/*.jade'],
            dest            :       process.cwd()+'/app'
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
            audio          : {
                src         : [     process.cwd()+'/src/media/audio/*'],
                dest        :       process.cwd()+'/app/assets/media/audio'
            },
            files          : {
                src         : [     process.cwd()+'/src/media/files/*'],
                dest        :       process.cwd()+'/app/assets/media/files'
            }
        }
    };

    return config;

};