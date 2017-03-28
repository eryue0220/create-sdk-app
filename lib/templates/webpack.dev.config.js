/**
 * @file webpack.dev.config.js
 */

const path = require('path');
const webpack = require('webpack');
const WebpackProxyPlugin = require('webpack-proxy-plugin');

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
  cache: true,
  watch: true,
  target: 'web',
  devtool: 'inline-source-map',
  entry,
  externals: Object.assign({}, webpackBaseConfig.externals, global_namespace),
  output: {
    filename: '[name].js',
    publicPath: getPath(`../dist/develop/`),
    path: getPath(`../dist/develop/`)
  },
  plugins: (webpackBaseConfig.plugins || []).concat(
    new webpack.NoEmitOnErrorsPlugin(),
    new WebpackProxyPlugin(config)
  )
});
