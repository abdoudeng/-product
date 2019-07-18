var path = require('path')
var webpack = require('webpack')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '/bundle.js'),
        filename: '[name].js'
    },
    mode:'development',
    module: {
        rules:[
            {
                test: /\.vue$/, 
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }, 
            {  
                test: /\.css$/,                  
                use: [
                    'style-loader',
                    'css-loader'
                  ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
            },  
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: 'file-loader'
            },   
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('development')
        // }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true
        })
    ]

}