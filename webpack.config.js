const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    "core-js/modules/es.promise",
    "core-js/modules/es.array.iterator",
    './src/index.js',
  ], 
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    port: 9000,
    historyApiFallback: true,
    // compress: true,
    // overlay: true,
    // hot: true
  },
  resolve: {
    extensions: ['.js','.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            'loader': 'file-loader',
            options: {
              name: 'assets/[hash].[ext]'
            },
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    }),
    
    // new HotModuleReplacementPlugin({})
  ],

}