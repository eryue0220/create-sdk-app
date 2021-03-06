/**
 * @file webpack.prod.config.js
 */

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const webpackBaseConfig = require('./webpack.base.config');
const config = require('../project.json');

const entry = {};
let global_namespace;

const getPath = dir => path.join(__dirname, dir);

for (const key in config) {
  entry[key] = getPath(`../${config[key].entry}`);
  global_namespace = config[key].global_namespace;
}

module.exports = Object.assign({}, webpackBaseConfig, {
  cache: false,
  entry: entry,
  target: 'web',
  output: {
    filename: '[name].js',
    path: getPath(`../dist/production/`),
    publicPath: getPath(`../production/`)
  },
  externals: Object.assign({}, webpackBaseConfig.externals, global_namespace),
  plugins: (webpackBaseConfig.plugins || []).concat(
    new webpack.NoEmitOnErrorsPlugin(),
    new UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true
      }
    })
  )
});
