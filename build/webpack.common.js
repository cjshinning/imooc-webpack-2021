const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    // mainFiles: ['index', 'child'],
    alias: {
      // jennychan: path.resolve(__dirname, '../src/child')
      child: path.resolve(__dirname, '../src/a/b/c/child/')
    }
  },
  module: {
    rules: [{
      test: /\.m?jsx?$/,
      // exclude: /node_modules/,
      include: path.resolve(__dirname, '../src'),
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
    // 解决老的版本的库未修改hash变化问题，新版可以不加
    runtimeChunk: {
      name: 'runtime'
    },
    // tree shaking
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      // minSize: 30000,
      // maxSize: 0,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors'
        },
        // default: {
        //   // minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true,
        //   filename: 'common.js'
        // }
      },
    }
  },
  performance: false,
  output: {
    path: path.resolve(__dirname, '../dist')
  }
}