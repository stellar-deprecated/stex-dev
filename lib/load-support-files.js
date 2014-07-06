var glob = require("glob");
var path = require("path");
var _    = require("lodash");

module.exports = function(dir) {
  var searchPath = path.join(dir, "support/**/*.js");
  var files = glob.sync(searchPath);

  _.each(files, function(file) {
    require(file)();
  });
}