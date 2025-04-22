const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './client/src/index.jsx',
    output: {
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-react", "@babel/preset-env"],
                  },
                },
            },
            {
                test: /.s?css$/,
                 use: ['style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            outputPath: 'images',
                            limit: 8192,
                        },
                    },
                ]
            }
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./client/src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    devServer: {
        open: true,
        hot: true,
        historyApiFallback: true,
    },
};
