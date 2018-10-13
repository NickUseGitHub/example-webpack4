import ExtractTextPlugin from 'extract-text-webpack-plugin'
import Dotenv from 'dotenv-webpack'

import webpackConf, { outputPath, twigPages } from './webpack.config.production.babel'

export default function(env) {
  return Object.assign({}, webpackConf(env), {
    mode: 'development',
    plugins: [
      new Dotenv({
        path: './.dev-env'
      }),
      ...twigPages,
      new ExtractTextPlugin({
        // define where to save the file
        filename: 'css/[name].bundle.css',
        allChunks: true
      })
    ],
    output: {
      path: outputPath,
      filename: '[name].bundle.js',
      publicPath: '/'
    },
    devServer: {
      contentBase: outputPath,
      historyApiFallback: true,
      port: 3000
    }
  })
}
