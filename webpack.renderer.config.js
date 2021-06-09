/* eslint-disable */
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const loader = require('sass-loader');

rules.push({
  test: /\.(scss|css)$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    { loader: 'sass-loader' },
  ],
});

rules.push({
  test: /\.(svg|png|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
});

rules.push({
  test: /\.(woff|woff2|ttf|otf|eot)$/,
  use: [{ loader: 'file-loader' }],
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
