var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'build');

var INDEX_HTML = SRC_DIR + '/index.html';
var INDEX_JS = SRC_DIR + '/index.js';

var config = {
  entry: [ INDEX_HTML, INDEX_JS],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test:  INDEX_HTML,
        loader: 'file-loader?name=[name].[ext]!extract-loader!html-loader'
      },
      {
        test:  /(\.html)(![INDEX_HTML])$/,
        loader: 'file-loader?name=[path][name].[ext]!extract-loader!html-loader'
      },
      {
        test: /\.(scss|css|eot|svg|ttf|woff|woff2|jpeg|jpg|png|ico)$/,
        loader: 'file-loader?name=[name].[hash].[ext]&publicPath=assets/[ext]/&outputPath=' + BUILD_DIR
      }
    ]
  }
};

module.exports = config;
