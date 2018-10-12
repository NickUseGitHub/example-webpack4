import path from 'path'
const appPath = path.resolve(__dirname, './src')

export default {
  entry: {
    app: path.resolve(appPath, './index')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
}
