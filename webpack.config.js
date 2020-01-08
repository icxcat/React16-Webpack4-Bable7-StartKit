const HtmlWebPackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  devServer: {
    port: 7725,
    open: true,
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_module/,
        use: 'babel-loader',
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp?g|svg|gif)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              name: '[name].[hash:8].[ext]',
              outputPath: 'static/img/',
            },
          },
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: 'url-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new ManifestPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, 'src/assets/favicon.ico'),
      minify: !isDevelopment && {
        html5: true,
        collapseWhitespace: true,
        caseSensitive: true,
        removeComments: true,
      },
    }),
    new CleanWebpackPlugin(),
  ],
};
