const { Module } = require("webpack");
const path = require('path');

Module.exports = {
    entry: './assets/javascript/entry.js',
    output: {
        publicPath: '/',
        path: path.join(__dirname, '..'),
        filename: 'dist/javascript/bundle.js'
    },
    plugins: [],
    module: {}
}