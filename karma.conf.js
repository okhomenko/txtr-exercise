// Karma configuration
// Generated on Tue May 27 2014 14:05:21 GMT+0300 (EEST)

module.exports = function (config) {
    'use strict';

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        browsers: ['PhantomJS'],


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'sinon-chai'],

        // list of files / patterns to load in the browser
        files: [
            'app/js/components/**/*.js',
            'app/js/lib/**/*.js',
            'test/**/*.js'
        ],

        // list of files to exclude
        exclude: [
            '**/*.swp'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'coverage': 'src/**/*.js'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO

    });
};
