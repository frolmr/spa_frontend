const webpack = require('webpack')
const ReactIntlPlugin = require('react-intl-webpack-plugin')

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
        // 'REMOTE_HOST': JSON.stringify('http://ec2-54-149-82-142.us-west-2.compute.amazonaws.com')
        'REMOTE_HOST': JSON.stringify('http://localhost:3000')
      }
    }),
    new ReactIntlPlugin(
      {
        'react-intl': {
          "messagesDir": "./build/messages",
          "enforceDesription": false
        }
      }
    )
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
            "react-hot-loader/webpack"
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
