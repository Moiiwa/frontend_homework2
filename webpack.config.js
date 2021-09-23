const path = require('path')
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js'] // TODO add JSX extension to allow webpack make imports of such files (without specifying extension in import statement)
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' /* TODO set correct loader to make code transpilation from jsx */,
                    options: {}
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ],
            },
            {
                test: /\.(png|svg|jpg)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent: ({ htmlWebpackPlugin }) =>
                '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
                htmlWebpackPlugin.options.title +
                '</title><link rel="icon" href="public/billie.jpg"/></head><body><div id="app"></div></body><footer>m.gudkov@innopolis.university</footer></html>',
            filename: "index.html",
            title: "Second hometask"
        }),
    ]
}
