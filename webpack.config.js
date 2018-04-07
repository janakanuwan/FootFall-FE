const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const appSrc = path.resolve(__dirname, 'src');
const assetSrc = path.resolve(__dirname, 'assets');
const outputDir = path.resolve(__dirname, 'build');

const mode = process.env.NODE_ENV || 'development';
const isDev = mode === 'development';

console.log(`Mode:${process.env.NODE_ENV}, dev:${isDev}`);

const GLOBALS = {
  __DEV__: JSON.stringify(isDev),
  'process.env.NODE_ENV': JSON.stringify(mode)
};

const webpackConfig = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: outputDir
  },
  module: {
    rules: [
      isDev ? {} : {
        test: /\.jsx?$/,
        enforce: 'pre',
        include: [appSrc],
        loader: 'eslint-loader',
        options: {
          failOnError: true,
          quiet: true
        }
      },
      {
        test: /\.jsx?$/,
        include: [appSrc],
        loader: 'babel-loader',
        options: {
          compact: !isDev,
          cacheDirectory: isDev
        }
      },
      {
        test: /\.css$/,
        include: [appSrc, assetSrc],
        loader: isDev ? 'style-loader!css-loader' : ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?minimize&sourceMap'
        })
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: [appSrc, assetSrc],
        loader: 'url-loader',
        options: {
          name: 'media/[name].[hash:8].[ext]',
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './assets/index.html',
      minify: isDev ? {} : {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ].concat(isDev ? [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin()
  ] : [
    new ExtractTextPlugin('[name].css', {
      allChunks: true,
    }),
  ])
  ,
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Models: path.resolve(__dirname, 'src/app/models/index.js'),
    }
  },
  devtool: isDev ? 'cheap-module-source-map' : 'source-map',
  devServer: {
    contentBase: outputDir,
    hot: true,
    historyApiFallback: true,
  },
  bail: !isDev,
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  stats: {
    assets: true,
    colors: true,
    errors: true,
    version: true,
    hash: true,
    timings: true,
    chunks: true,
    chunkModules: false,
    children: false,
  },
};

module.exports = webpackConfig;
