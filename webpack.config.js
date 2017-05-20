const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'REMOTE_HOST': JSON.stringify('http://ec2-54-149-82-142.us-west-2.compute.amazonaws.com')
        // 'REMOTE_HOST': JSON.stringify('http://localhost:3000')
      }
    })
  ],
  module:
  {
    loaders:
    [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders:
          [
            "eslint-loader",
            "react-hot"
          ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', "stage-0", 'react']
        }
      }
    ]
  }
}
