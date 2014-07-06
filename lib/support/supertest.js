module.exports = function() {
  var stexDev  = require("../../index.js");
  stexDev.supertest = require("supertest");

  //expectBody helper
  stexDev.supertest.Test.prototype.expectBody = function(body) {
    return this.expect(function(res) {
      stexDev.chai.expect(res.body).to.have.properties(body);
    });
  };
};