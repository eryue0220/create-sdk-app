/**
 * @file webpack.prod.config.js
 */

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const webpackBaseConfig = require('./webpack.base.config');
const config = require('../project.json');

function getPath(dir) {
  return path.join(__dirname, dir);
}

const project_name = config.project;
const production_dist = config.production_path;
const project_entry = config.entry;
const global_namespace = config.global_namespace;
const entry = {
  [project_name]: getPath('../' + project_entry)
};

module.exports = Object.assign({}, webpackBaseConfig, {
  cache: false,
  entry: entry,
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../' + production_dist),
    publicPath: path.join(__dirname, '../' + production_dist)
  },
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

