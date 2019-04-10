module.exports = {
  entry: {
    js: "./src/js/site.js",
    scss: "./src/scss/base.scss",
    img: "./src/img/**/*"
  },
  out: {
    js: {
      path: "./dist/js",
      name: "bundle.js"
    },
    scss: {
      path: "./dist/css",
      name: "site.min.css"
    },
    img: {
      path: "./dist/img"
    }
  },
  files: {
    js: "./src/js/**/*.js",
    scss: "./src/scss/**/*.scss"
  },
  dist: "./dist"
};
