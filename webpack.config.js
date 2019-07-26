const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|gif|png|jpg|eot|woff|ttf)$/,
        loaders: [
          'url-loader'
        ]
      },
      {
        test: /\,js$/,
        loader: 'babel-loader?presets[]=es2015'
      },
      {
        test: /\.(svg|gif|png|jpg)$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunk: ['main']
    }), new HtmlWebpackPlugin({
      filename: 'pricing.html',
      template: 'src/pricing.html',
      chunk: ['main']
    }), new HtmlWebpackPlugin({
      filename: 'features.html',
      template: 'src/features.html',
      chunk: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: 'src/test.html',
      chunk: ['main']
    }),
    new CopyWebpackPlugin([
      {from:'src/img',to:'img'} 
    ]), 
  ],
}
