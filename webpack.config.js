'use strict'
const path  = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    cssnano = require('cssnano');

module.exports = {
    entry: './app/assets/javascripts/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('app/assets/javascripts')
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
         {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react','es2015']
                }
            }
        },
        {
            test: /\.png$/,
            loaders: [
                'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        query: {progressive: true}
                    }
                ],
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{loader: 'css-loader'}]
            })

        },
        {
            test: /\.svg$/,
            loader: 'url-loader?mimetype=image/svg+xml'
        },
        {
            test: /\.woff$/,
            loader: 'url-loader?mimetype=application/font-woff'
        },
        {
            test: /\.woff2$/,
            loader: 'url-loader?mimetype=application/font-woff'
        },
        {
            test: /\.eot$/,
            loader: 'url-loader?mimetype=application/font-woff'
        },
        {
            test: /\.ttf$/,
            loader: 'url-loader?mimetype=application/font-woff'
        }
        ]
    },
    plugins:[
        new ExtractTextPlugin('../stylesheets/bootstrap.css'),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor:cssnano,
            cssProcessorOptions:{ discardComments: {removeAll: true} },
            canPrint: true
        })
    ]
}

