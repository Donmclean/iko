// Karma configuration
// Generated on Mon Dec 28 2015 17:55:31 GMT-0500 (EST)

module.exports = (config) => {
  var gulpConfig = require(process.cwd() + '/gulp/gulp.config')();

  config.set(gulpConfig.vars._.assign(gulpConfig.tests.karmaConfig,
      {
        files: gulpConfig.vars._.flattenDeep([
          gulpConfig.jsDeps.src,
          gulpConfig.tests.ngMocks,
            gulpConfig.jsSrcs.src,
          gulpConfig.tests.all
        ])
      }));
};
