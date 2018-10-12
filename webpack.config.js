const path = require('path');
const appPath = path.resolve(__dirname, './src')

module.exports = {
  entry: {
    app: path.resolve(appPath, './index')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
}
