const common = require('./webpack.common.js')
const merge = require('webpack-merge');

module.exports = merge(common,{
    output: {
        publicPath: '.' //Convierte las rutas relativas a la carpeta que contiene el proyecto
    },
    module: {
        rules:[
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader', 'sass-loader']
            }
        ]
    }
})
