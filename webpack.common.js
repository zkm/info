const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const content = require('./src/data/content.json');
const template = Handlebars.compile(
  fs.readFileSync(path.resolve(__dirname, 'src/index.hbs'), 'utf8')
);

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // Only images referenced from CSS (bg-header.gif) go through this rule.
      // Everything else in src/assets is referenced by string from content.json
      // or the template, so CopyWebpackPlugin ships it instead.
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: () => template(content),
      filename: 'index.html',
      inject: 'head',
      scriptLoading: 'defer',
    }),
    new MiniCssExtractPlugin({ filename: 'main.css' }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets',
          to: 'assets',
          // Already emitted by the asset/resource rule above.
          globOptions: { ignore: ['**/bg-header.gif'] },
        },
      ],
    }),
  ],
};
