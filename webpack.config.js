var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

var config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: __dirname + '/src',
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.scss$/,
        include: __dirname + '/src',
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  sassLoader: {
    includePaths: [__dirname, "./src/sass"]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    HTMLWebpackPluginConfig
  ]
};

module.exports = config;
