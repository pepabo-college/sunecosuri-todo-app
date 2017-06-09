'use strict'
const path  = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app/assets/javascripts/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('app/assets/javascripts')
    },
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
                        query: {
                            progressive: true
                        }
                    }
                ],
            }
        ]
    }
}

