const nodeExternals = require('webpack-node-externals')


module.exports = {
  target: 'node',
  mode: process.env.NODE_ENV,
  entry: './src/main.ts',
  output: {
    path: __dirname + '/dist',
    filename: process.env.NODE_ENV === 'production' && 'main.js' || 'main.dev.js'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts'
    ]
  }
}
