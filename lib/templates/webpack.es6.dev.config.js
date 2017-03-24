/**
 * @file webpack.es6.dev.config.js.js
 */

const path = require('path')
const webpack = require('webpack')
const WebpackProxyPlugin = require('webpack-proxy-plugin');

const webpackBaseConfig = require('./webpack.base.config');
const config = require('../project.json');

const project_name = config.project;
const develop_dist = config.develop_path;
const project_entry = config.entry;
const global_namespace = config.global_namespace;

function getPath(dir) {
  return path.join(__dirname, dir);
}

const entry = {
  [project_name]: getPath('../' + project_entry)
}

module.exports = Object.assign({}, webpackBaseConfig, {
  cache: true,
  watch: true,
  target: 'web',
  devtool: 'inline-source-map',
  entry: entry,
  externals: Object.assign({}, webpackBaseConfig.externals, global_namespace),
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, '../src/'),
        options: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    publicPath: getPath('../' + develop_dist),
    path: getPath('../' + develop_dist)
  },
  plugins: (webpackBaseConfig.plugins || []).concat(
    new webpack.NoEmitOnErrorsPlugin(),
    new WebpackProxyPlugin(config)
  )
});