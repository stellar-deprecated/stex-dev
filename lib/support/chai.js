module.exports = function() {
  var stexDev  = require("../../index.js");
  stexDev.chai = require("chai");
  stexDev.chai.use(require('chai-properties'));
}