const ESLintWebpackPlugin = require("eslint-webpack-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new ESLintWebpackPlugin()
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        // rules: [
        //     {
        //         "test": /\.js$/,
        //         "exclude": '/node_modules/',
        //         use: 'eslint-webpack-plugin'
        //     }
        // ]
    },

};
