/**
 * Created by donmclean on 12/29/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('run-tests-once', (cb) => {

        setTimeout(() => {
            try {
                funcs.startTests(true, false, true, false, cb);
            }
            catch (err) {
                $.util.log(err);
                config.vars.exec(process.exit(1));
            }
        }, 100);
    });
};