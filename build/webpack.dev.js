const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const {
  getStyle
} = require('./webpack.util')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [].concat(getStyle(true))
  },
  output: {
    publicPath: '/',
    filename: '[name].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
