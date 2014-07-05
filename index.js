var stexDev = module.exports;

stexDev.gulp        = require("./lib/gulp");
stexDev.gulpPlugins = require("./lib/gulp-plugins");
stexDev.should      = require("should");
stexDev.supertest   = require("supertest");

stexDev.paths = {
  "lint":  ['./gulpfile.js', './lib/**/*.js', './config/**/*.js', './migrations/**/*.js'],
  "watch": ['./gulpfile.js', './lib/**', './test/**/*.js', '!test/{temp,temp/**}'],
  "tests": ['./test/**/*.js', '!test/{temp,temp/**}']
};
