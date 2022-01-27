const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const root = path.resolve(__dirname, '..')
const src = path.resolve(root, 'src')
const web = path.resolve(__dirname)
const dist = path.resolve(root, 'build/web')

const isDev = process.env.NODE_ENV === 'development'
const isAnalysis = process.env.WEBPACK_ANALYZE === 'true'

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
      '@': src,
      '@/c': path.resolve(src, 'components'),
      l1: src,
      web: web,
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devServer: {
    static: dist,
    historyApiFallback: true,
    hot: true,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(src, 'img'), to: path.resolve(dist, 'img') },
      ]
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(web, 'index.ejs'),
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[id].[contenthash].css' : '[id].css',
      chunkFilename: isDev ? '[name].[contenthash].css' : '[name].css',
    }),
    new webpack.EnvironmentPlugin({ ...process.env }),
    ...(isDev
      ? [
          new webpack.SourceMapDevToolPlugin({
            filename: '[file].map[query]',
            exclude: ['vendor/*.js'],
          }),
          new BundleAnalyzerPlugin(),
        ]
      : []),
    ...(isAnalysis ? [new BundleAnalyzerPlugin()] : []),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
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
