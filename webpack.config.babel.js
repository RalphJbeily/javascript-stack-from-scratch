// @flow

import path from 'path'
import webpack from 'webpack'

import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'

export default {
  entry: [
    'react-hot-loader/patch',
    './src/client', // starting point of the app
  ],
  output: {
    filename: 'js/bundle.js', // name of the bundle to generate
    path: path.resolve(__dirname, 'dist'), // destination folder
    publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`, // URL
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ }, // how Webpack treat some type of files
    ],
  },
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: WDS_PORT, // Port for webpack dev server
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
