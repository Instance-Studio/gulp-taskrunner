module.exports = function(gulp, plugins, config) {
  return function() {
    const { paths } = config;
    const run = config.run.js;
    const settings = config.settings.js;

    return gulp
      .src(paths.entry.js)
      .pipe(run.sourcemaps ? plugins.sourcemaps.init() : plugins.noop())
      .pipe(run.bro ? plugins.bro() : plugins.noop())
      .pipe(run.babel ? plugins.babel(settings.babel) : plugins.noop())
      .pipe(run.concat ? plugins.concat(paths.out.js.name) : plugins.noop())
      .pipe(run.uglify ? plugins.uglify() : plugins.noop())
      .pipe(plugins.sourcemaps.write("./"))
      .pipe(gulp.dest(paths.out.js.path));
  };
};
