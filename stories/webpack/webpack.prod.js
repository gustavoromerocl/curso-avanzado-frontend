//npm install extract-text-webpack-plugin
const common = require('./webpack.common.js')
const merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSaas = ExtractTextPlugin({
    filename: 'dist/css/[name].[contenthash].css'
})
module.exports = merge(common,{
    output: {
        publicPath: '.' //Convierte las rutas relativas a la carpeta que contiene el proyecto
    },
    module: {
        rules:[
            {
                test: /\.scss$/,
                use: extractSaas.extract({
                    use: [
                        {loader: 'css-loader', options: {minimize: true}},
                        {loader: 'sass-loader'}
                    ]
                })
            }
        ]
    },
    plugins: [extractSaas]
})

