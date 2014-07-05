module.exports = function() {
  var gulp = require("gulp");

  gulp.on('stop', shutdown);
  gulp.on('err', shutdown);
}

function shutdown() {
  console.log("here");
  if(typeof stex !== 'undefined') {
    stex.shutdown();
  }
};