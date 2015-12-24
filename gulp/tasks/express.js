/**
 * Created by donmclean on 12/14/15.
 */
module.exports = (gulp, $, config) => {
    "use strict";
    gulp.task('express', function(cb) {
        //config.vars.app.use(require('connect-livereload')());
        config.vars.app.use(config.vars.express.static(config.vars.EXPRESS_ROOT));
        config.vars.app.listen(config.vars.EXPRESS_PORT);
        cb();
    });
};