const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

const publicPath = '/';

module.exports = merge(webpackConfig, {
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, './src/index.js')
    ],
    //配置webpack-dev-server热更新，采用非Node方式
    devServer: {
        publicPath: publicPath,
        contentBase: path.resolve(__dirname, 'dist'),
        inline: true,
        hot: true,
    }
});