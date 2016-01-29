/**
 * Created by donmclean on 12/28/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('bump', () => {

        let options = {
            type: ['major','minor','patch','prerelease'],
            version: ''
        };

        if(config.vars.args.v){
            if(config.vars.args.v === '' || config.vars.args.v === true){
                $.util.log(`NEED CORRECT -v ARGUMENTS! -> 1.x.x  `);
                return null;
            } else {
                gulp.src(config.packageFile)
                    .pipe($.plumber())
                    .pipe($.bump({version: config.vars.args.v}))
                    .pipe(gulp.dest(config.basePath));
            }

        } else if (config.vars.args.b){

            let str = config.vars.args.b;
            if(config.vars._.includes(options.type, str)) {
                $.util.log(str);
                gulp.src(config.packageFile)
                    .pipe($.plumber())
                    .pipe($.bump({type: str}))
                    .pipe(gulp.dest(config.basePath));
            } else {
                $.util.log(`NEED CORRECT -b ARGUMENTS! -> ('major','minor','patch','prerelease') `);
                return null;
            }
        } else {
            $.util.log("NEED -v or -b ARGUMENTS! | -v -> 1.x.x | -b -> ('major','minor','patch','prerelease')");
        }
    });
};