const argv = require('minimist')(process.argv.slice(2));
const _ = require("lodash");
const run = require("./run");
const settings = require('./settings');
const paths = require("./paths");

const isProduction = argv.production || false;
const envName = isProduction ? 'production' : 'development';

// console.log(run.default);

// const envRun = _.assignIn(run.default, run[envName]);
const envRun = {js: {...run.default.js, ...run[envName].js}};
const envSettings = _.assign({}, settings.default, settings[envName]);

console.log('envRun', envRun);

module.exports = {
    paths: paths,
    settings: envSettings,
    run: envRun
}
