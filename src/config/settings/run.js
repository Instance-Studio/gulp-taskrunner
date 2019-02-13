const run = {
    default: {
        js: {
            babel: true,
            sourcemaps: true,
            bro: true,
            concat: true,
            uglify: false,
        },
        scss: {
            sourcemaps: true,
            sass: true,
            rename: true,
            sassGlob: true
        }
    },
    development: {
    },
    production: {
        js: {
            sourcemaps: false,
            uglify: true,
        },
        scss: {
            sourcemaps: false
        }
    }
}

module.exports = run;