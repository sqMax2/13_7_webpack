// const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = merge(common, {
    mode: "development",
    devtool: "cheap-source-map",
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
        new HtmlWebpackPlugin({title: 'Development'})
    ],
    // devtool: 'inline-source-map',
});