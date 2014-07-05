module.exports = function() {
  
  var stexDev = require("../index.js");
  var plugins = stexDev.gulpPlugins();
  var paths   = stexDev.paths;
  var gulp    = require("gulp");

  gulp.on('stop', shutdown);
  gulp.on('err', shutdown);

  addTestTasks();

  return gulp;

  function addTestTasks() {
    gulp.task('lint', function () {
      return gulp.src(paths.lint)
        .pipe(plugins.jshint('.jshintrc'))
        // .pipe(plugins.jscs())
        .pipe(plugins.jshint.reporter('jshint-stylish'));
    });


    gulp.task('mocha', function(cb) {
      return gulp
        .src(paths.tests, {"cwd": __dirname})
        .pipe(plugins.spawnMocha({
          'reporter' : 'list', 
          'env'      : {'NODE_ENV': 'test'}
        }));
    });

    gulp.task('watch', function() {
      gulp.run('test');
      return gulp.watch(paths.watch, ['test']);
    });
  }


  function shutdown() {
    if(typeof stex !== 'undefined') {
      stex.shutdown();
    }
  };
};
