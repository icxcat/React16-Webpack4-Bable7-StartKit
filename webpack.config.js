const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/"
  },
  devServer: {
    port: 7725,
    open: true,
    contentBase: path.join(__dirname, "../src"),
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_module/,
        use: "babel-loader"
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: "file-loader"
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: "url-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
      minify: !isDevelopment && {
        html5: true,
        collapseWhitespace: true,
        caseSensitive: true,
        removeComments: true
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
