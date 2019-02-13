module.exports = (gulp, plugins, config) => {
    return () => {
        const { paths } = config;
        const run = config.run.scss;
        const settings = config.run.js;

        return gulp.src(paths.entry.scss)
        .pipe(run.sourcemaps ? plugins.sourcemaps.init() : plugins.noop())
        .pipe(run.sassGlob ? plugins.sassGlob() : plugins.noop())
        .pipe(run.sass ? plugins.sass().on('error', plugins.sass.logError) : plugins.noop())
        .pipe(run.rename ? plugins.rename(paths.out.scss.name) : plugins.noop())
        .pipe(run.sourcemaps ? plugins.sourcemaps.write('./') : plugins.noop())
        .pipe(gulp.dest(paths.out.scss.path))
    }
}