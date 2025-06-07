
const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    path: require.resolve('path-browserify'),
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  );

  return config;
};

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  resolve: {
    fallback: {
      process: require.resolve("process/browser"),
    },
  },
  plugins: [
    new NodePolyfillPlugin(),
  ],
};