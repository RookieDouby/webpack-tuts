const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'static/js/[name].[chunkHash:8].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Tutorials',
            template: 'public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[chunkHash:8].css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 3000,
        open: true,
    }
}