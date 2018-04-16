const webpack = require("webpack");

var config = {
  entry: {
    app: ['./src/core/bootstrap.js'],
  },
  devtool: "source-map",
  output: {
    path:     __dirname + '/build/',
    filename: 'bundle.min.js',
  },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ],
  resolve: {
    root: __dirname + '/src/',
  },
  module: {
    noParse: [],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate!babel' },
      { test: /\.html$/, loader: 'raw' },
    ]
  }
};

module.exports = config;
