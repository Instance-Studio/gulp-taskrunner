module.exports = {
  entry: {
    js: ["./src/js/site.js", "./src/js/vendor/*.js"],
    scss: "./src/scss/base.scss"
  },
  out: {
    js: {
      path: "./dist/js",
      name: "bundle.js"
    },
    scss: {
      path: "./dist/css",
      name: "site.min.css"
    }
  },
  files: {
    js: "./src/js/**/*.js",
    scss: "./src/scss/**/*.scss"
  },
  dist: './dist'
};
