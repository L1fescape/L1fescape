const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const root = path.resolve(__dirname, '..')
const web = path.resolve(__dirname)
const src = path.resolve(root, 'src')
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
  resolve: {
    alias: {
      'ak.gg': src,
      web: web,
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devServer: {
    contentBase: src,
    historyApiFallback: true,
    host: process.env.HOST || 'localhost',
    hot: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(web, 'index.ejs'),
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
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
}
