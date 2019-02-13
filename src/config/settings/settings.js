const config = {
  default: {
    js: {
      babel: {
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                browsers: ["last 5 versions", "ie >= 9"]
              }
            }
          ]
        ]
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
