//npm install extract-text-webpack-plugin
//npm install webpack-merge
const common = require('./webpack.common.js');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJS = require('terser-webpack-plugin');
const loader = require('sass-loader');


module.exports = merge(common,{
  stats:{
    children: true,
  },
  output:{
    publicPath: '.'
  },
  module:{
    rules:[
      {
        test: /\.scss$/,
        use:[ { loader: MiniCssExtractPlugin.loader, options: {publicPath: '../../'}}, 'css-loader', 'sass-loader']
      }, //MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
      {
        test: /\.html$/,
        use:[
          {loader: 'html-loader', options: {minimize: true}}
        ],
      },

    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'dist/css/[name].[contenthash].css',
      //chunkFilename: "[id].css"
  })
  ],
  optimization:{
    minimizer: [new TerserJS(),new OptimizeCssAssetsPlugin({})]
  },
});

/*FIREBASE
sudo npm install -g firebase-tools
firebase login
firebase deploy --only hosting
*/

