const path = require('path');
const { merge } = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  plugins: [new DashboardPlugin()],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    // The template and content are compiled in webpack.common.js, so webpack
    // doesn't know to watch them.
    watchFiles: ['src/index.hbs', 'src/data/content.json'],
    port: 8888,
    hot: true,
    compress: true,
    host: 'localhost',
  },
});
