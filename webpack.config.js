const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },

    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src/'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        }],
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'index.html'),
            to: path.resolve(__dirname, 'dist'),
        },
        {
            from: path.resolve(__dirname, 'src/assets', '**', '*'),
            to: path.resolve(__dirname, 'dist'),
        },
        ]),
        new webpack.DefinePlugin({
            'typeof CANVAS_RENDERER': JSON.stringify(true),
            'typeof WEBGL_RENDERER': JSON.stringify(true),
        }),
    ],
};