var path = require('path');

var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: ['./index.ts'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../'),
    libraryTarget: 'commonjs'
  },
  module: {
    loaders: [{
      test: /\.proto$/,
      loader: 'proto-loader?root=' + path.resolve(__dirname, '../third-party/tensorflow')
    }, {
      test: /\.ts$/,
      loader: 'awesome-typescript-loader'
    }]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  target: 'node',
  externals: [
    {
      'tensorflow.node': './build/Release/tensorflow.node',
    },
    function (context, request, cb) {
      var isExternal = /^[a-z]/.test(request);
      cb(null, isExternal);
    }
  ],
  plugins: []
}
