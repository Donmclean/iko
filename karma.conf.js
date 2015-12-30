// Karma configuration
// Generated on Mon Dec 28 2015 17:55:31 GMT-0500 (EST)

module.exports = function(config) {
  var gulpConfig = require(process.cwd() + '/gulp/gulp.config')();

  config.set(gulpConfig.vars._.assign(gulpConfig.tests.karmaConfig,
      {
        files: gulpConfig.vars._.flattenDeep([
          gulpConfig.jsDeps.src,
          gulpConfig.tests.ngMocks,
          gulpConfig.jsSrcs.dest + `/${gulpConfig.moduleName}-*.min.js`,
          gulpConfig.tests.all
        ])
      },{logLevel: config.LOG_INFO},{
          // web server port
            port: gulpConfig.vars.EXPRESS_PORT
      }));

  //});


      // list of files / patterns to load in the browser
      //);


  //config.set({
  //
  //  // base path that will be used to resolve all patterns (eg. files, exclude)
  //  basePath:  gulpConfig.tests.karmaConfig.basePath,
  //
  //
  //  // frameworks to use
  //  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  //  frameworks: gulpConfig.tests.karmaConfig.frameworks,
  //
  //
  //  // list of files / patterns to load in the browser
  //  files: gulpConfig.vars._.flattenDeep([
  //    gulpConfig.jsDeps.src,
  //    gulpConfig.tests.ngMocks,
  //    gulpConfig.jsSrcs.dest + `/${gulpConfig.moduleName}-*.min.js`,
  //    gulpConfig.tests.all
  //  ]),
  //
  //  // list of files to exclude
  //  exclude:  gulpConfig.tests.karmaConfig.exclude,
  //
  //
  //  // preprocess matching files before serving them to the browser
  //  // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
  //  preprocessors: gulpConfig.tests.karmaConfig.exclude,
  //
  //
  //  // test results reporter to use
  //  // possible values: 'dots', 'progress'
  //  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  //  reporters: gulpConfig.tests.karmaConfig.reporters,
  //
  //
  //  // web server port
  //  port: gulpConfig.vars.EXPRESS_PORT,
  //
  //  //plugins : gulpConfig.tests.karmaConfig.plugins,
  //
  //
  //  // enable / disable colors in the output (reporters and logs)
  //  colors:  gulpConfig.tests.karmaConfig.colors,
  //
  //
  //  // level of logging
  //  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
  //  logLevel: config.LOG_DISABLE,
  //
  //
  //  // enable / disable watching file and executing tests whenever any file changes
  //  autoWatch:  gulpConfig.tests.karmaConfig.autoWatch,
  //
  //
  //  // start these browsers
  //  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  //  //browsers: ['Chrome', 'Firefox', 'Safari'],
  //  browsers: gulpConfig.tests.karmaConfig.browsers,
  //
  //
  //  // Continuous Integration mode
  //  // if true, Karma captures browsers, runs the tests and exits
  //  singleRun: gulpConfig.tests.karmaConfig.singleRun,
  //
  //  // Concurrency level
  //  // how many browser should be started simultaneous
  //  concurrency:  gulpConfig.tests.karmaConfig.concurrency
  //});
};
