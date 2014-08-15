module.exports = function() {
  var stexDev  = require("../../index.js");
  stexDev.sinon = require("sinon");

  stexDev.sinon.init = function () {
    beforeEach(function() {
      this.sinon = stexDev.sinon.sandbox.create();
    })

    afterEach(function() {
      this.sinon.restore();
    });
  }
}