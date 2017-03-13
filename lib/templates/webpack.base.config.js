/**
 * @file webpack.base.config.js
 */

module.exports = {
  cache: true,
  entry: {},
  output: {},
  stats: {
    colors: true,
    reasons: true
  },
  externals: {
    $: true,
    jQuery: true
  },
  resolve: {
    extensions: ['.js']
  },
  module: {},
  plugins: []
}
