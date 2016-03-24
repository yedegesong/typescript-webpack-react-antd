'use strict';

/**
 * Created by x on 11/23/15.
 */
var path = require('path');
/**
 * 导入文件入口
 * @type {{index: string, details: string}|exports|module.exports}
 */

var webpack           = require('webpack');
var filepath = require('./filepath');
//提取公用CSS
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToSrc  = path.resolve(__dirname, 'src');
//页面主控制目录
var controllerSrc = path.resolve(__dirname, 'src','controller');

console.log(filepath)

var _entry = function(options){
    var entry = {};
    for (var name in options) {
        entry[name] = controllerSrc+'/'+options[name];
    }
    return entry;
}

var config = {
    devtool: "source-map",
    //入口文件配置
    entry:_entry(filepath),
    resolve:     {
        extensions: ['', '.js', '.jsx','.ts','.tsx']
    },
    //输出文件配置
    output:      {
        filename:   '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/dist/'
    },
    module:      {
        loaders: [
            {
                test:    /\.(js|jsx|tsx)?$/,
                loaders: ['react-hot', 'babel','ts-loader'],
                exclude: /node_modules/
            },
            {
                test:   /\.css$/,
                loader: 'style!css',
            }
        ],
    },
    preLoaders: [
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader" }
    ],
    plugins:     [
        commonsPlugin,
        new webpack.HotModuleReplacementPlugin()
    ]
};


module.exports = config;
