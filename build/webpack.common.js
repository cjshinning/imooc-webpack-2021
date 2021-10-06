const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');

const makePlugins = (configs) => {
  const plugins = [
    new CleanWebpackPlugin()
  ];

  Object.keys(configs.entry).forEach(item => {
    plugins.push(
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: `${item}.html`,
        chunks: ['runtime', 'vendors', item]
      })
    )
  })

  const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
  files.forEach(file => {
    if (/.*\.dll.js/.test(file)) {
      plugins.push(new AddAssetHtmlPlugin({
        filepath: path.resolve(__dirname, '../dll', file)
      }))
    }
    if (/.*\.manifest.json/.test(file)) {
      plugins.push(new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, '../dll/', file)
      }))
    }
  })

  return plugins;
}

const configs = {
  entry: {
    index: './src/index.js',
    list: './src/list.js',
    detail: './src/detail.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
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
  optimization: {
    // 解决老的版本的库未修改hash变化问题，新版可以不加
    runtimeChunk: {
      name: 'runtime'
    },
    // tree shaking
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors'
        }
      }
    }
  },
  performance: false,
  output: {
    path: path.resolve(__dirname, '../dist')
  }
};

configs.plugins = makePlugins(configs);

module.exports = configs;