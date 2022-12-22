// const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = merge(common, {
    mode: "production",
    devtool: 'source-map'
});