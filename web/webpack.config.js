const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const root = path.resolve(__dirname, '..')
const src = path.resolve(root, 'src')
const web = path.resolve(__dirname)
const dist = path.resolve(root, 'build/web')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    index: path.resolve(web, 'index.tsx'),
  },
  output: {
    filename: '[name].bundle.js',
    path: dist,
  },
  devtool: false,
  resolve: {
    alias: {
      l1: src,
      web: web,
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devServer: {
    contentBase: src,
    historyApiFallback: true,
    hot: true,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    writeToDisk: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(web, 'index.ejs'),
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[id].[contenthash].css' : '[id].css',
      chunkFilename: isDev ? '[name].[contenthash].css' : '[name].css',
    }),
    ...(isDev
      ? [
          new webpack.SourceMapDevToolPlugin({
            filename: '[file].map[query]',
            exclude: ['vendor/*.js'],
          }),
        ]
      : []),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=[name].[ext]',
      },
      { test: /\.md$/, use: [{ loader: 'html-loader' }] },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  node: {
    __filename: true,
    __dirname: true,
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  stats: {
    entrypoints: false,
    children: false,
    modules: false,
  },
}
