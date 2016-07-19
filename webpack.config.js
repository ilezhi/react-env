const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_DIR = path.resolve(__dirname);
const SRC_DIR = path.resolve(ROOT_DIR, 'src');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const NODE_MODULES_DIR = path.resolve(ROOT_DIR, 'node_modules');

let webpackConfig = {
  devtool: 'eval-source-map',                     // 方便找到合并代码后错误位置
  entry: {
    app: [path.resolve(SRC_DIR, 'index.js')],
    verdor: ['react', 'react-dom']
  },
  output: {
    path     : path.resolve(ROOT_DIR, 'dist'),
    filename : '[name].js'
  },
  resolve: {
    extensions : ['', '.js', '.jsx', '.scss', '.css']
  },
  module: {
    loaders: [
      {
        test     : /\.(js|jsx)$/,
        exclude : /node_modules/,
        loader  : 'babel'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new HtmlWebpackPlugin({
      template : path.resolve(SRC_DIR, 'index.html'),
      filename : 'index.html',
      inject   : 'body'
    })
  ]
};

module.exports = webpackConfig;
