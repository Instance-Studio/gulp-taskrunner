const babelify = require("babelify");

const config = {
  default: {
    js: {
      browserify: {
        debug: true,
        transform: [
          babelify.configure({
            presets: ["@babel/preset-env"],
            sourceMaps: true
          })
        ],
        error: "emit"
      }
    },
    scss: {
      sass: {}
    },
    browserSync: {
      proxy: "studio3am.local",
      ghostMode: false
      // https: {
      //   key: "/etc/apache2/ssl/localhost.key",
      //   cert: "/etc/apache2/ssl/localhost.crt"
      // }
    }
  },
  development: {},
  production: {
    scss: {
      sass: {
        style: "compressed"
      }
    }
  }
};

module.exports = config;
