const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: path.resolve(__dirname,'./src/index.jsx'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    node: { fs: 'empty' },
    target: 'web',
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/, 
                loader: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 90000,
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/public/index.html')
        }),
        new MiniCSSExtractPlugin({
            filename: 'index.css'
        })
    ]
}