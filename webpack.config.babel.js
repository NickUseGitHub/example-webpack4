import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
const appPath = path.resolve(__dirname, './src')
const twigPath = path.resolve(appPath, './templates')

export default {
  entry: {
    app: path.resolve(appPath, './index')
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(twigPath, './main.twig'),
      inject: false
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
}
