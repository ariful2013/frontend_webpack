const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Mandatory: option should be "development" or "production"
  mode: 'development',

  // Optional: Default if entry point is index.js
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
  },

  // Optional: Default if output directory is build
  output: {
    // Optional: Default path is build
    path: path.resolve(__dirname, 'build'),
    // Optional: Default output filename is main.js
    filename: 'js/[name].js',
    // Optional: Common asset filename
    assetModuleFilename: '[name][ext][query]',
    // Delete Previous content on build directory
    clean: true,
  },

  devServer: {
    static: path.resolve(__dirname),
    hot: true,
    open: false,
    // Optional: Default port is 8080
    // port: 8080,
  },

  // Optional:
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(s(a|c)ss|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/i,
        exclude: [/fonts/],
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        exclude: [/images/],
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
    ],
  },

  // Optional
  plugins: [
    new HtmlWebpackPlugin({
      title: 'JS Amazona', // Optional
      filename: 'index.html',
      inject: 'body', // Optional
      template: path.resolve(__dirname, 'index_temp.html'), // Optional
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
  devtool: 'source-map',
};
