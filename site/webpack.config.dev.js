const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, 'app/index.js'),
    ],
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'public'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(jpe?g|png|gif)(\?.+)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.md$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};