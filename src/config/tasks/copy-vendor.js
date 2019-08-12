module.exports = (gulp, plugins, config) => {
    const {paths} = config;

    return () => {
        return gulp.src(paths.entry.vendor)
        .pipe(gulp.dest(paths.out.vendor.path))
    }
}
