/**
 * Created by donmclean on 12/29/15.
 */
module.exports = (gulp, $, config, funcs) => {
    "use strict";
    gulp.task('run-tests-watch', (cb) => {

        setTimeout(() => {
            try {
                funcs.startTests(false, true, true, false, cb);
            }
            catch (err) {
                $.util.log($.util.colors.red(err));
                config.vars.exec(process.exit(1));
                cb();
            }
        }, 100);
    });
};