const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
    entry: [
        path.resolve(__dirname, './src/index.js')
    ],
    plugins: [
        new UglifyJSPlugin({
            uglifyOptions: {
                output: {
                    comments: false,
                    beautify: false,
                },
            },
        }),
    ],
});