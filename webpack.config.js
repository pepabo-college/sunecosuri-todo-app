'use strict'
const path  = require('path');
const webpack = require('webpack');

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
            use: ['style-loader','css-loader']
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
    }
}

