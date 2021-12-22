/* eslint-disable */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new DefinePlugin({
    'process.env.REACT_APP_API_URL': JSON.stringify(
      process.env.REACT_APP_API_URL
    ),
  }),
];
