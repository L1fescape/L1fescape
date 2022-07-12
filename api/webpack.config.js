const path = require('path')

const root = __dirname
const src = path.resolve(root, 'src')
const dist = path.resolve(root, 'dist')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    worker: path.resolve(src, 'index.ts'),
  },
  output: {
    path: dist,
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        }
      },
    ],
  },
}
