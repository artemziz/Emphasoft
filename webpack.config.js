const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [
                        [
                          "@babel/plugin-proposal-class-properties",
                          {
                            "loose": true
                          }
                        ],
                        ["@babel/transform-runtime"]
                    ]
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                  'style-loader',
                  MiniCssExtractPlugin.loader,
                  {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                  }, {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                  }
                ]
            }

        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
};
