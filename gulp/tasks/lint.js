/**
 * Created by donmclean on 12/10/15.
 */
"use strict";
module.exports = (gulp, $, config, funcs) => {
    gulp.task('lint', () => {
        var deferred = config.vars.Q.defer();
        if(funcs.isWatching) {
            console.log('funcs.isWatching: ', funcs.isWatching);
            gulp.src(config.jsSrcs.src)
                .pipe($.plumber())
                .pipe($.jscs())
                .pipe($.jscs.reporter())
                .pipe($.jscs.reporter('fail'))
                .pipe($.jshint())
                .pipe($.jshint.reporter(funcs.jshintErrorHandlerNoExit))
                .pipe($.debug({title: 'linting js src files:'}))
                .pipe($.livereload())
                .on('error', (err) => {$.util.log($.util.colors.red(err));})
                .on('end', function () {
                    deferred.resolve();
                });
            return deferred.promise;
        } else {
            gulp.src(config.jsSrcs.src)
                .pipe($.plumber())
                .pipe($.jscs())
                .pipe($.jscs.reporter())
                .pipe($.jscs.reporter('failImmediately'))
                .pipe($.jshint())
                .pipe($.jshint.reporter(funcs.jshintErrorHandler))
                .pipe($.debug({title: 'linting js src files:'}))
                .pipe($.livereload())
                .on('error', (err) => {$.util.log($.util.colors.red(err));})
                .on('end', function () {
                    deferred.resolve();
                });
            return deferred.promise;
        }
    });
};