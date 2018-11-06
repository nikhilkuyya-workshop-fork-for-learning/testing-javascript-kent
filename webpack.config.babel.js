const path = require('path')
module.exports = {
  mode: 'none',
  context: path.join(__dirname),
  entry: path.resolve('simple-react-app', './index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
