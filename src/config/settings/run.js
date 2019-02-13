const run = {
  default: {
    js: {
      babel: true,
      sourcemaps: true,
      bro: true,
      concat: true,
      uglify: false,
      cached: true
    },
    scss: {
      sourcemaps: true,
      sass: true,
      rename: true,
      sassGlob: false,
      postcss: true,
      cached: true
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
      cached: false
    },
    scss: {
      sourcemaps: false,
      cached: false
    }
  }
};

module.exports = run;
