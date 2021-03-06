// Karma configuration
// Generated on Sun Feb 28 2021 17:35:26 GMT-0500 (Peru Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'mocha',
      'chai',
      'sinon'
    ],


    // list of files / patterns to load in the browser
    files: [
      // Libraries - Init
      'https://code.jquery.com/jquery-3.5.1.min.js',
      // Libraries - End

      // General files - Init
      'src/assets/js/_common/constants.js',
      'src/assets/js/_common/local-storage.js',
      'src/assets/js/_common/backend.apiclient.js',
      // General files - End

      // home files - Init
      'src/assets/js/home/home.view.js',
      'src/assets/js/home/home.presenter.js',
      // home files - End

      // auth files - Init
      'src/assets/js/auth/auth.view.js',
      'src/assets/js/auth/auth.presenter.js',
      // auth files - End

      'test/**/*tests.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      // 'progress',
      'mocha'
    ],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'Chrome', 
      // 'ChromeHeadless'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
