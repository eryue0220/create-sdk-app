/**
 * @file webpack.prod.config.js
 */

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const webpackBaseConfig = require('./webpack.base.config');
const config = require('../project');

function getPath(dir) {
  return path.join(__dirname, dir);
}

const project_name = config.project_name;
const production_dist = config.production_dist;
const project_entry = config.entry;
const global_namespace = config.global_namespace;
const entry = {};
entry[project_name] = getPath('../' + project_entry);


module.exports = Object.assign({}, webpackBaseConfig, {
  cache: false,
  entry: entry,
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../' + production_dist),
    publicPath: path.join(__dirname, '../' + production_dist),
    libraryTarget: 'commonjs2'
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

