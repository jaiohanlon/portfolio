var path = require('path');
var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/js/index',
  ],
  resolve: {
    extensions: [".jsx", ".js", ".scss", ""],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'assets/bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.NoErrorsPlugin(),
    new WebpackNotifierPlugin(),
    new ExtractTextPlugin("assets/styles.css"),
    new HtmlWebpackPlugin({template: 'src/index.html'}),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader?name=img/img-[hash:6].[ext]"
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          combineLoaders([
            {
              loader: 'css-loader',
              query: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[hash:base64:5]',
              },
            },
            {
              loader: 'resolve-url-loader',
            },
            {
              loader: 'sass-loader',
            },
            {
              loader: 'postcss-loader',
            }
          ])
        ],
      },
    ]
  },
  postcss: () => {
    return [
      require('autoprefixer')
    ];
  },
};
