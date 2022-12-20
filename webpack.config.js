const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
        port: 8080,
        // contentBase: './dist',
        hot: true,
        // stats: {
        //     children: false,
        //     maxModules: 0
        // }
    },
    plugins: [
        new ESLintWebpackPlugin(),
        new HtmlWebpackPlugin({title: 'Development'})
    ],
    output: {
        filename: 'main.js'
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
    devtool: 'inline-source-map',
};
