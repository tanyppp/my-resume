const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: 'cheap-module-source-map',
    entry: path.resolve(__dirname, './js/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: "/assets/"
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
                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                        ['@babel/plugin-proposal-class-properties', { loose: true }],
                        '@babel/plugin-transform-runtime'
                    ]
                },
                include: path.resolve(__dirname, './src')
            }
        }, {
            test: /\.(png|jpg|jpeg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name].[hash:8].[ext]',  // 设置打包后的文件名
                    limit: 100 * 1024,  // 小于100k使用base64，大于100k使用
                    ouputPath: 'images/'  // 设置打包后的文件夹
                }
            }
        }, {
            test: /\.(html|htm)$/,
            use: 'html-withimg-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.template.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/app.css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'     // 将jquery模块以$的方式注入到每个模块中
        }),
        new Webpack.DefinePlugin({
            mode: process.env.NODE_ENV
        })
    ],
    resolve: {
        extensions: ['.js', '.scss', '.css', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: {
        minimizer: process.env.NODE_ENV === 'production'
            ? [
                new UglifyjsWebpackPlugin({
                    cache: true,        // 是否缓存
                    parallel: true,     // 是否并发打包
                    sourceMap: true     // 是否将压缩的js与源码映射
                }),
                new OptimizeCssAssetsWebpackPlugin()
            ] : [],
        splitChunks: process.env.NODE_ENV === 'production'
            ? {
                cacheGroups: {   // 缓存组里放需要抽离的模块，模块名自取
                    common: {               // 抽离公共模块
                        chunks: 'initial',
                        minSize: 0,         // 大于等于0就要进行抽离
                        minChunks: 2        // 最少要引用两次才抽离
                    },
                    vendor: {               // 抽离node_modules下的模块
                       priority: 1,         // 优先抽离
                       test: /node_modules/,
                       chunks: 'initial',
                       minSize: 0,
                       minChunks: 2
                    }
                }
            }: {}
    }
}
