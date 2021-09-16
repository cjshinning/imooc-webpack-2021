const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.jpg$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images',
          limit: 2048
        }
      },
    }, {
      test: /\.(eot|ttf|svg)$/,
      use: {
        loader: 'file-loader'
      },
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    // tree shaking
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          // filename: 'vendors.js'
        },
        default: {
          // minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          filename: 'common.js'
        }
      },
    }
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../dist')
  }
}