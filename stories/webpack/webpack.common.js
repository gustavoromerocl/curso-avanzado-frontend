const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpack = new HtmlWebpackPlugin({
    template: './assets/index.template.html',
    filename: 'index.html',
    minify: false,
})

module.exports = {
    entry: './assets/javascript/entry.js',
    output: {
        publicPath: '/',
        path: path.join(__dirname, '..'),
        filename: 'dist/javascript/bundle.js'
    },
    plugins: [htmlWebpack],
    module: {
        rules: [
            {
                test: /\.(svg|png|jpg)$/, 
                loader: 'file-loader'
            },
        ]
    }
}