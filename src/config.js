/**
 * Created by donmclean on 5/24/16.
 */

module.exports = () => {
    "use strict";

    const config = {};

    //**********************************************************************
    //*******************************CORE***********************************
    //**********************************************************************

    config.moduleName               = 'iko';
    config.mainFileName             = 'index.html';
    config.nodePath                 = process.env.NODE_PATH;
    config.sitePrefix               = '';
    config.baseDir                  = process.cwd();
    config.srcDir                   = config.baseDir+'/src';
    config.destDir                  = config.baseDir+'/app';
    config.tempDir                  = config.baseDir+'/temp';
    config.jscsConfig               = config.baseDir+'/.jscsrc';

    config.gulpFile                 = config.baseDir+'/gulpfile.js'; //TODO: throw error is gulpfile not found
    config.gulpFiles                = [

        config.baseDir+'/gulpfile.js',
        config.baseDir+'/gulp/**/*.js'

    ];

    config.EXPRESS_PORT             = 3000;
    config.EXPRESS_ROOT_DEV         = process.cwd();
    config.EXPRESS_ROOT_PROD        = process.cwd() + '/app';


    //**********************************************************************
    //*******************************PATHS**********************************
    //**********************************************************************

    //************************VENDOR DEPENDENCIES***************************
    config.vendor                   = {};
    config.vendor.srcDir            = config.baseDir+'/src/vendor';

    config.vendor.js                = {};
    config.vendor.css               = {};

    config.vendor.js.srcDir         = config.baseDir+'/src/vendor/js';
    config.vendor.js.src            = [config.baseDir+'/src/vendor/js/**/*.js'];

    config.vendor.css.srcDir        = config.baseDir+'/src/vendor/css';
    config.vendor.css.src           = [config.baseDir+'/src/vendor/css/**/*.css'];

    //**********************************************************************
    //********************************JS************************************
    //**********************************************************************
    config.js                       = {};
    config.js.deps                  = {};
    config.js.src                   = {};


    //*************************JS DEPENDENCIES******************************
    config.js.deps.mainFileName     = 'deps.js';
    config.js.deps.srcDir           = config.baseDir+'/node_modules';
    config.js.deps.destDir          = config.baseDir+'/app/assets/js';
    config.js.deps.src              = [

        config.baseDir+'/node_modules/jquery/dist/jquery.js',
        config.baseDir+'/node_modules/angular/angular.js',
        config.baseDir+'/node_modules/angular-ui-router/release/angular-ui-router.js',
        config.baseDir+'/node_modules/lodash/lodash.js'
        // config.baseDir+'/node_modules/semantic-ui/dist/semantic.js',

    ];

    config.js.deps.webSrcs          = [

        'https://code.responsivevoice.org/responsivevoice.js'

    ];

    //***************************JS SOURCES*********************************
    config.js.src.mainFileName      = config.moduleName+'.js';
    config.js.src.srcDir            = config.baseDir+'/src/js';
    config.js.src.destDir           = config.baseDir+'/app/assets/js';
    config.js.src.changed           = [];
    config.js.src.src               = [

        config.baseDir+'/src/js/**/*.module.js',
        config.baseDir+'/src/js/**/*.js'
    ];

    config.js.src.webSrcs           = [];


    //**********************************************************************
    //********************************SASS**********************************
    //**********************************************************************
    config.sass                     = {};
    config.sass.mainFileName        = 'styles.css';
    config.sass.srcDir              = config.baseDir+'/src/sass';
    config.sass.tempSrc             = config.tempDir+'/**/*.css';
    config.sass.destSrc             = config.tempDir+'/**/*.css';
    config.sass.destDir             = config.baseDir+'/app/assets/css';
    config.sass.src                 = [

        config.baseDir+'/src/sass/styles.scss'

    ];

    config.sass.watch               = [

        config.baseDir+'/src/sass/**/*.scss'

    ];


    //**********************************************************************
    //********************************CSS***********************************
    //**********************************************************************
    config.css                      = {};
    config.css.deps                 = {};
    config.css.src                  = {};


    //*************************CSS DEPENDENCIES*****************************
    config.css.deps.mainFileName    = 'deps.css';
    config.css.deps.srcDir          = config.baseDir+'/src/vendor/css';
    config.css.deps.destDir         = config.baseDir+'/app/assets/css';

    config.css.deps.src             = [

        config.baseDir+'/node_modules/normalize.css/normalize.css'

    ];

    config.css.deps.webSrcs          = [

        'https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css'

    ];

    //***************************CSS SOURCES********************************
    config.css.src.srcDir           = config.baseDir+'/src/css';
    config.css.deps.destDir         = config.baseDir+'/app/assets/css';
    config.css.src.src              = [

        config.baseDir+'/src/css/**/*.css'

    ];
    config.css.src.webSrcs          = [];


    //**********************************************************************
    //*****************************TEMPLATES********************************
    //**********************************************************************
    config.templates                = {};
    config.templates.main           = config.baseDir+'/src/templates/index.jade';
    config.templates.mainHTML       = config.baseDir+'/src/templates/index.html';
    config.templates.changed        = [];
    config.templates.src            = [

        config.baseDir+'/src/templates/**/*.jade'

    ];
    config.templates.srcHTML        = [

        config.baseDir+'/src/templates/**/*.html'

    ];

    config.templates.srcDir         = config.baseDir+'/src/templates';
    config.templates.destDir        = config.baseDir+'/app';

    //**********************************************************************
    //*******************************MEDIA**********************************
    //**********************************************************************
    config.media                    = {};
    config.media.images             = {};
    config.media.videos             = {};
    config.media.audio              = {};
    config.media.files              = {};
    config.media.fonts              = {};

    config.media.srcDir             = [ config.baseDir+'/src/media/' ];
    config.media.destDir            = [ config.baseDir+'/app/assets/media/' ];
    config.media.watch              = [ config.baseDir+'/src/media/**/**' ];
    config.media.images.src         = [ config.baseDir+'/src/media/images/**/*.{png,gif,jpg,svg}' ];
    config.media.images.destDir     = config.baseDir+'/app/assets/media/images';
    config.media.videos.src         = [ config.baseDir+'/src/media/videos/**/*' ];
    config.media.videos.destDir     = config.baseDir+'/app/assets/media/videos';
    config.media.audio.src          = [ config.baseDir+'/src/media/audio/**/*'];
    config.media.audio.destDir      = config.baseDir+'/app/assets/media/audio';
    config.media.files.src          = [ config.baseDir+'/src/media/files/**/*' ];
    config.media.files.destDir      = config.baseDir+'/app/assets/media/files';
    config.media.fonts.src          = [ config.baseDir+'/src/media/fonts/**/*' ];
    config.media.fonts.destDir      = config.baseDir+'/app/assets/media/fonts';

    return config;
};