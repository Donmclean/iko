/**
 * Created by donmclean on 12/2/15.
 */
module.exports = () => {
    "use strict";
    const vars = require(process.cwd()+'/gulp/variables')();

    const config = {};

    config.moduleName       = 'iko';
    config.mainFileName     = 'index.html';
    config.basePath         = process.cwd();
    config.tempPath         = config.basePath+'/temp';
    config.dest             = config.basePath+'/app';
    config.vars             = require(config.basePath+'/gulp/variables')();
    config.packageFile      = config.basePath+'/package.json';
    config.gulpFile         = config.basePath+'/gulpfile.js';
    config.gulpFiles        = [     config.basePath+'/gulpfile.js', config.basePath+'/gulp/**/*.js'];

    config.jsDeps           = {
                                    mainFileName    :       'deps.js',
                                    src             : [     config.basePath+'/node_modules/jquery/dist/jquery.js',
                                                            config.basePath+'/node_modules/angular/angular.js',
                                                            config.basePath+'/node_modules/angular-ui-router/release/angular-ui-router.js',
                                                            config.basePath+'/node_modules/lodash/index.js'],
                                    webSrcs         : [     'https://code.responsivevoice.org/responsivevoice.js'],
                                    dest            :       config.basePath+'/app/assets/js'
                                };

    config.jsSrcs           = {
                                    src             : [     config.basePath+'/src/js/**/*.module.js', config.basePath+'/src/js/**/*.js'],
                                    dest            :       config.basePath+'/app/assets/js',
                                    templateCache   :       config.basePath+'/temp/templates.js'
                                };

    config.sass             = {
                                    mainFileName    :       'styles.css',
                                    watch           : [     config.basePath+'/src/sass/**/*.scss'],
                                    src             : [     config.basePath+'/src/sass/styles.scss'],
                                    dest            :       config.basePath+'/app/assets/css'
                                };
    config.css              = {
                                    src             : [     config.basePath+'/src/css/**/*.css']
                                };

    config.templates        = {
                                    main            :       config.basePath+'/src/templates/index.jade',
                                    src             : [     config.basePath+'/src/templates/**/*.jade'],
                                    dest            :       config.basePath+'/app'
                                };

    config.views        = {
                                dir             :       'views/',
                                main            :       config.basePath+'/src/templates/views/**/*.jade',
                                src             : [     config.basePath+'/src/templates/views/**/*.jade'],
                                dest            :       config.basePath+'/app/assets/js'
                            };

    config.media        = {
                                images          : {
                                    src         : [     config.basePath+'/src/media/images/*'],
                                    dest        :       config.basePath+'/app/assets/media/images'
                                },
                                videos          : {
                                    src         : [     config.basePath+'/src/media/videos/*'],
                                    dest        :       config.basePath+'/app/assets/media/videos'
                                },
                                audio           : {
                                    src         : [     config.basePath+'/src/media/audio/*'],
                                    dest        :       config.basePath+'/app/assets/media/audio'
                                },
                                files           : {
                                    src         : [     config.basePath+'/src/media/files/*'],
                                    dest        :       config.basePath+'/app/assets/media/files'
                                },
                                fonts           : {
                                    src         : [     config.basePath+'/src/media/fonts/*'],
                                    dest        :       config.basePath+'/app/assets/media/fonts'
                                }
                            };

    config.tests        = {
                                all             :       config.basePath+'/tests/**/*.js',
                                unit            :       config.basePath+'/tests/unit/**/*.js',
                                integration     :       config.basePath+'/tests/integration/**/*.js',
                                ngMocks         :       config.basePath+'/node_modules/angular-mocks/angular-mocks.js',
                                karmaConfigFile :       config.basePath+'/karma.conf.js',
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
                                        dir : config.basePath+'/test-coverage',
                                        reporters: [
                                            {type: 'html', subdir: 'report-html'},
                                            {type: 'lcov', subdir: 'report-lcov'},
                                            {type: 'text-summary'}
                                        ]
                                    }
                                }
                            };

    return config;

};