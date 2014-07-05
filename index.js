var stexDev = module.exports;

stexDev.gulp        = require("./lib/gulp");
stexDev.gulpPlugins = require("./lib/gulp-plugins");
stexDev.should      = require("should");
stexDev.chai        = require("chai");
stexDev.supertest   = require("supertest");

stexDev.chai.use(require('chai-properties'));

stexDev.supertest.Test.prototype.expectBody = function(body) {
  return this.expect(function(res) {
    stexDev.chai.expect(res.body).to.have.properties(body);
  });
};

stexDev.paths = {
  "lint":  ['./gulpfile.js', './lib/**/*.js', './config/**/*.js', './migrations/**/*.js'],
  "watch": ['./gulpfile.js', './lib/**', './test/**/*.js', '!test/{temp,temp/**}'],
  "tests": ['./test/**/*.js', '!test/{temp,temp/**}']
};
