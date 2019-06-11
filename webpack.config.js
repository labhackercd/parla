const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV

const config = {
   mode: env || 'development'
}


module.exports = {
  entry:  path.join(__dirname, 'src/assets/js/index'),
  output: {
    path: path.join(__dirname, 'src/static/dist'),
    filename: '[name]-[hash].js'
  },
  plugins: [
    new BundleTracker({
      path: path.join(__dirname, 'src/static/'),
      filename: 'webpack-stats.json'
    }),
    new MiniCssExtractPlugin({
      filename: config.mode === 'development' ? '[name].css' : '[name].[hash].css',
      chunkFilename: config.mode === 'development' ? '[id].css' : '[id].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s(a|c)ss$/,
        loader: [
          config.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: config.mode === 'development'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
}