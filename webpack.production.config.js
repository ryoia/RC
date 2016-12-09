var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');

module.exports = {
  // devtool: 'source-map',
  context: srcPath,
  entry: path.join(srcPath, 'client.js'),
  output: {
    path: buildPath,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.css$/,
        // loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        include: __dirname + '/src'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    root: srcPath
  },
  plugins: [
    // new StaticSiteGeneratorPlugin('main', locals.routes),
    // new ExtractTextPlugin("styles.css")
  ]
  // ],
  // devServer: {
  //   historyApiFallback: true
  // }
};
