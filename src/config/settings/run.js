const run = {
  default: {
    js: {
      babel: true,
      sourcemaps: true,
      browserify: true,
      concat: true,
      uglify: false,
      stripDebug: false
    },
    scss: {
      sourcemaps: true,
      sass: true,
      rename: true,
      sassGlob: true,
      postcss: true,
    }
  },
  development: {
    scss: {
      postcss: false
    }
  },
  production: {
    js: {
      sourcemaps: false,
      uglify: true,
      stripDebug: true
    },
    scss: {
      sourcemaps: false,
    }
  }
};

module.exports = run;
