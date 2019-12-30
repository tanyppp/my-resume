const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default

const configs = require('./config/env.' + process.env.mode + '.js')
console.log(configs)
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'cheap-module-source-map',
  entry: path.resolve(__dirname, './src/js/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash:8].js',
    publicPath: configs.serverIp
  },
  module: {
    rules: [{
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }, {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }, {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-proposal-decorators', {
                legacy: true
              }],
              ['@babel/plugin-proposal-class-properties', {
                loose: true
              }],
              '@babel/plugin-transform-runtime'
            ],
            ignore: [
              'dist/**/*.js',
              'packages/**/*.js'
            ]
          }
        },
        include: path.resolve(__dirname, './src')
      }, {
        test: /\.js$/,
        use: {
          loader: 'eslint-loader',
          options: {
            enforce: 'pre' // 在所有loader之前执行
          }
        }
      }, {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'images/[name].[hash:8].[ext]', // 设置打包后的文件名
            limit: 100 * 1024, // 小于100k使用base64，大于100k使用
            esModule: false
          }
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'fonts/[name].[hash:8].[ext]',
            limit: 100 * 1024,
            esModule: false
          }
        }
      },
      // {
      //   test: /\.(html|htm)$/,
      //   use: 'html-withimg-loader'
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.template.html'),
      favicon: path.resolve(__dirname, './public/logo.ico'),
      filename: 'index.html',
      title: 'web前端工程师-简历',
      minify: {
        removeAttributeQuotes: true, // 去掉属性引号
        collapseWhitespace: true // 去掉空格
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      chunkFilename: '[id].[hash:8].css'
    }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery' // 将jquery模块以$的方式注入到每个模块中
    // }),
    new webpack.DefinePlugin({
      mode: JSON.stringify(process.env.NODE_ENV)
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, './src/static'),
      to: path.resolve(__dirname, './dist/static')
    }]),
    new CleanWebpackPlugin(),
    new WebpackDeepScopeAnalysisPlugin()
  ],
  devServer: isProd
    ? {}
    : {
      port: configs.port,
      contentBase: path.resolve(__dirname, './dist'),
      hot: true
    },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  optimization: {
    minimizer: isProd ? [
      new UglifyjsWebpackPlugin({
        cache: true, // 是否缓存
        parallel: true, // 是否并发打包
        sourceMap: true // 是否将压缩的js与源码映射
      }),
      new OptimizeCssAssetsWebpackPlugin()
    ] : [],
    splitChunks: isProd ? {
      cacheGroups: { // 缓存组里放需要抽离的模块，模块名自取
        common: { // 抽离公共模块
          chunks: 'initial',
          minSize: 0, // 大于等于0就要进行抽离
          minChunks: 1 // 最少要引用两次才抽离
        },
        vendor: { // 抽离node_modules下的模块
          priority: 1, // 优先抽离
          test: /node_modules/,
          chunks: 'initial',
          minSize: 0,
          minChunks: 1
        }
      }
    } : {}
  }
}
