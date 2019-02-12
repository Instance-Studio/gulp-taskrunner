module.exports = function(gulp, plugins, config) {
    return function() {
        return gulp.src(config.paths.entry.scss)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.rename(config.paths.out.scss.name))
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(config.paths.out.scss.path))
    }
}