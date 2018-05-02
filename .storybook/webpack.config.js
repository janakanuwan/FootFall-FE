// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');
const appSrc = path.resolve(__dirname, 'src');
const assetSrc = path.resolve(__dirname, 'assets');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [appSrc],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: [appSrc, assetSrc],
        loader: 'style-loader!css-loader'
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
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Models: path.resolve(__dirname, 'src/app/models/index.js'),
    }
  },
};
