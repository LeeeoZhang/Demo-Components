const path = require('path')

const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
})


module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader?minimize=false', 'sass-loader', 'autoprefixer-loader?browsers=last 4 versions']
            })

        }, {
            test: /\.(|woff|woff2|eot|ttf||otf)$/,
            use: [
                'url-loader?limit=100000'
            ]
        }, {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015'
        }, {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
                'url-loader?limit=8192'
            ]
        }]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        // new UglifyJSPlugin()
    ]
}