var stexDev = module.exports;

stexDev.gulp             = require("./lib/gulp");
stexDev.gulpPlugins      = require("./lib/gulp-plugins");
stexDev.loadSupportFiles = require("./lib/load-support-files");

stexDev.loadSupportFiles(__dirname + "/lib");

stexDev.paths = {
  "lint":  ['./gulpfile.js', './lib/**/*.js', './config/**/*.js', './migrations/**/*.js'],
  "watch": ['./gulpfile.js', './lib/**', './test/**/*.js', '!test/{temp,temp/**}'],
  "tests": ['./test/**/*.js', '!test/{temp,temp/**}']
};
