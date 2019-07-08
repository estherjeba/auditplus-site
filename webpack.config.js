const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['main']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        loaders: [
          'url-loader'
        ]
      },
      {
        test: /\,js$/,
        loader: 'babel-loader?presets[]=es2015'
      }
    ]
  }
}
