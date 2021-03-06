const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/index.js'
  },
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules']
  },
  module: {
    rules: [
      { test: /\.js/, use: 'babel-loader' },
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.json$/,
        type: 'javascript/auto',
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      base: '/'
    }),
    new MiniCssExtractPlugin()
  ]
};
