const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'), // __dirname represent current directory
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // look only for js and jsx file 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' 
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}