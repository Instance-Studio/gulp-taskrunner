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
    }
  },
  development: {},
  production: {}
};

module.exports = config;
