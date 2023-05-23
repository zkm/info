// webpack.config.js
const path = require("path");
const glob = require('glob');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  mode: "development", // Set the mode to 'development' or 'production'
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
      { test: /\.(hbs|handlebars)$/, loader: "handlebars-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.hbs", // or index.handlebars
      templateParameters: require("./src/content.json"),
      filename: "index.html",
      inject: "body",
      scriptLoading: "blocking",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets",
          to: "assets",
        },
      ],
    }),
    new DashboardPlugin({
      // Custom options here
      customOptions: {
        logLevel: 'info',
        minWidth: 500,
        minHeight: 300,
        borderRadius: 10,
        theme: {
          scheme: 'monokai',
          author: 'wimer hazenberg (http://www.monokai.nl)',
          base00: '#272822', // example custom color
          // more custom colors...
        }
      }
    })
  ],
};
