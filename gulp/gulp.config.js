/**
 * Created by donmclean on 12/2/15.
 */
module.exports = () => {
    "use strict";
    const vars = require(process.cwd()+'/gulp/variables')();

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
            webSrcs         : [     'https://code.responsivevoice.org/responsivevoice.js'],
            dest            :       process.cwd()+'/app/assets/js'
        },

        jsSrcs              : {
            src             : [     process.cwd()+'/src/js/**/*.module.js', process.cwd()+'/src/js/**/*.js'],
            dest            :       process.cwd()+'/app/assets/js',
            templateCache   :       process.cwd()+'/temp/templates.js'
        },

        sass                : {
            mainFileName    :       'styles.css',
            watch           : [     process.cwd()+'/src/sass/**/*.scss'],
            src             : [     process.cwd()+'/src/sass/styles.scss'],
            dest            :       process.cwd()+'/app/assets/css'
        },

        css                : {
            src             : [     process.cwd()+'/src/css/**/*.css']
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
        },


        tests               : {
            all             :       process.cwd()+'/tests/**/*.js',
            unit            :       process.cwd()+'/tests/unit/**/*.js',
            integration     :       process.cwd()+'/tests/integration/**/*.js',
            ngMocks         :       process.cwd()+'/node_modules/angular-mocks/angular-mocks.js',
            karmaConfigFile :       process.cwd()+'/karma.conf.js',
            karmaConfig     : {

                // base path that will be used to resolve all patterns (eg. files, exclude)
                basePath: '',

                // frameworks to use
                // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
                frameworks: ['jasmine'],

                // list of files to exclude
                exclude: [
                ],


                // preprocess matching files before serving them to the browser
                // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
                preprocessors : {
                    'src/**/*.js': ['babel','coverage'],
                    'tests/**/*.js': ['babel','coverage']
                },


                // test results reporter to use
                // possible values: 'dots', 'progress'
                // available reporters: https://npmjs.org/browse/keyword/karma-reporter
                reporters: ['progress', 'coverage'],

                babelPreprocessor: {
                    options: {
                        presets: ['es2015'],
                        sourceMap: 'inline'
                    }
                },


                //plugins : [
                //  //require('karma-webpack'),
                //  'karma-jasmine',
                //    'karma-coverage'
                //  //'karma-chrome-launcher',
                //  //'karma-safari-launcher',
                //  //'karma-firefox-launcher'
                //],


                // enable / disable colors in the output (reporters and logs)
                colors: true,

                // enable / disable watching file and executing tests whenever any file changes
                autoWatch: true,


                // start these browsers
                // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
                //browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS'],
                browsers: ['PhantomJS'],


                // Continuous Integration mode
                // if true, Karma captures browsers, runs the tests and exits
                singleRun: false,

                // Concurrency level
                // how many browser should be started simultaneous
                concurrency: Infinity,

                browserNoActivityTimeout: 1000,

                coverageReporter : {
                    dir : process.cwd()+'/test-coverage',
                    reporters: [
                        {type: 'html', subdir: 'report-html'},
                        {type: 'lcov', subdir: 'report-lcov'},
                        {type: 'text-summary'}
                    ]
                }
            }
        }
    };

    return config;

};