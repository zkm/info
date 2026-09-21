const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    // Site is served from https://zkm.github.io/info/, not the domain root.
    publicPath: '/info/',
  },
});
