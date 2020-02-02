const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'js/[name].[chunkHash:8].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Tutorials',
            template: 'public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkHash:8].css'
        }),
        new CopyWebpackPlugin([
            { from: path.resolve(process.cwd(), 'src/static'), to: path.resolve(process.cwd(), 'dist/static') }
        ]) 
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {

                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         name: 'images/[name].[ext]',
                    //         publicPath: '/'
                    //     },
                    // },
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 512,
                            name: 'images/[name].[ext]',
                            publicPath: '/'
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