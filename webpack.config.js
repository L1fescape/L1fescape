const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const src = path.resolve(__dirname, 'src')
const htdocs = path.resolve(__dirname, 'htdocs')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: dist
  },
  resolve: {
    alias: {
      'ak': src,
    },
    extensions: ['.ts', '.tsx', '.d.ts', '.js', '.json'],
  },
  devServer: {
    contentBase: src,
    historyApiFallback: true,
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './htdocs/index.ejs'
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.scss$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }] },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=[name].[ext]' },
    ]
  }
}
