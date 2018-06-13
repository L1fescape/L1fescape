const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const fs = require('fs')

const src = path.resolve(__dirname, 'src')
const pages = path.resolve(src, 'pages')
const htdocs = path.resolve(__dirname, 'htdocs')
const modules = path.resolve(__dirname, 'node_modules')
const dist = path.resolve(__dirname, 'dist')

const pageEntriesReducer = (acc, key) => {
  acc[key] = `${path.resolve(pages, key)}/index.ts`
  return acc
}
const pageEntries = fs.readdirSync(pages).reduce(pageEntriesReducer, {})

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: dist
  },
  resolve: {
    alias: {
      'ak.gg': src,
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devServer: {
    contentBase: src,
    historyApiFallback: true,
    host: process.env.HOST || 'localhost',
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './htdocs/index.ejs'
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(modules, 'font-awesome'),
      to: path.resolve(dist, 'fonts/font-awesome'),
    }]),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.js$/, enforce: 'pre', loader: 'source-map-loader' },
      { test: /\.scss$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }] },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.md$/, use: [{ loader: 'html-loader' }] },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
}
