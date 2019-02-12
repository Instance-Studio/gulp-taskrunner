const run = {
    default: {
        js: {
            babel: true,
            sourcemaps: true,
            bro: true,
            concat: true,
            uglify: false,
        }
    },
    development: {
    },
    production: {
        js: {
            sourcemaps: false,
            uglify: true,
        }
    }
}

module.exports = run;