const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    devtool: 'inline-source-map',
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template/index.html"
    }), new MiniCssExtractPlugin()],
    optimization: {
        runtimeChunk: 'single',
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
}