const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");

const postcssPlugins = [
  postcssPresetEnv({ browsers: ["last 5 versions", "ie >= 9"] }),
  cssnano({
    preset: [
      "default",
      {
        discardComments: {
          removeAll: true
        }
      }
    ]
  })
];

module.exports = (gulp, plugins, config) => {
  return () => {
    const { paths } = config;
    const run = config.run.scss;
    const settings = config.settings.scss;

    return gulp
      .src(paths.entry.scss)
      .pipe(run.sourcemaps ? plugins.sourcemaps.init() : plugins.noop())
      .pipe(run.sassGlob ? plugins.sassGlob() : plugins.noop())
      .pipe(
        run.sass
          ? plugins.sass(settings.sass).on("error", plugins.sass.logError)
          : plugins.noop()
      )
      .pipe(run.postcss ? plugins.postcss(postcssPlugins) : plugins.noop())
      .pipe(run.rename ? plugins.rename(paths.out.scss.name) : plugins.noop())
      .pipe(run.sourcemaps ? plugins.sourcemaps.write("./") : plugins.noop())
      .pipe(gulp.dest(paths.out.scss.path));
  };
};
