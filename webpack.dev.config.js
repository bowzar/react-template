const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = '/';

module.exports = {
    // devtool: 'source-map',
    // entry: [
    //     'react-hot-loader/patch',
    //     path.resolve(__dirname, './src/index.js')
    // ],
    entry: {
        "bundle": ['react-hot-loader/patch', path.resolve(__dirname, './src/index.dev.js')],
        "common": ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'), //打包文件的输出路径
        filename: 'bundle.js', //打包文件名
        publicPath: publicPath,
    },
    //配置webpack-dev-server热更新，采用非Node方式
    devServer: {
        publicPath: publicPath,
        contentBase: path.resolve(__dirname, 'dist'),
        inline: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', //指定模板路径
            filename: 'index.html', //指定文件名
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'common', filename: 'common.js' }),
    ],
    module: {
        rules: [ //配置加载器
            {
                test: /\.js$/, //配置要处理的文件格式，一般使用正则表达式匹配
                loader: 'babel-loader', //使用的加载器名称
                query: { //babel的配置参数，可以写在.babelrc文件里也可以写在这里
                    presets: ['env', 'react'],
                    plugins: ["react-hot-loader/babel"]
                }
            },
            {
                test: /\.js$/,
                enforce: 'pre', //加载器的执行顺序，不设置为正常执行，pre（前）|post（后），eslint是检查代码规范，应该在编译前就执行
                loader: 'eslint-loader',
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'less-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer'),
                                // require('precss'),
                                require('postcss-flexbugs-fixes')
                            ]
                        }

                    }
                ]
            },
            {
                test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: 'url-loader',
                options: {
                    limit: 10000, //1w字节以下大小的图片会自动转成base64
                },
            },
        ],
    }
}