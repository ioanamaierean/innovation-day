const path = require('path');
const webpack = require('webpack');
// var HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

module.exports = {
    mode: "development",
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [

            {
                test: /\.jade$/,
                exclude: [/node_modules/],
                 loaders: ['pug-loader']
            },
    ]
    },
    plugins : [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};
