import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const appPath = path.resolve(__dirname, './src')
const cssAppPath = path.resolve(appPath, './scss')
const twigPath = path.resolve(appPath, './templates')

export const outputPath = path.resolve(__dirname, './dist')
export const twigPages = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(twigPath, './main.twig'),
    inject: false
  })
]

export default function(env) { 
  return {
    mode: 'production',
    entry: {
      app: path.resolve(appPath, './index'),
      main: path.resolve(cssAppPath, './base.scss')
    },
    module: {
      rules: [
        { test: /\.twig$/, use: 'twig-loader' },
        {
          // regular css files
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: 'css-loader?importLoaders=1'
          })
        },
        {
          // sass / scss loader for webpack
          test: /\.(sass|scss)$/,
          use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        },
        { test: /\.scss$/, use: ['sass-loader'] }
      ]
    },
    plugins: [
      ...twigPages,
      new ExtractTextPlugin({
        // define where to save the file
        filename: '[name].[chunkhash].bundle.css',
        allChunks: true
      })
    ],
    output: {
      path: outputPath,
      filename: '[name].[chunkhash].bundle.js',
      publicPath: '/'
    }
  }
}
