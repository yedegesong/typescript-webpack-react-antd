'use strict';
/**
 * webpack 构建配置
 */
/**
 * Created by x on 11/23/15.
 */
var path = require('path');

/**
 * 导入文件入口
 * @type {{index: string, details: string}|exports|module.exports}
 */
var webpack           = require('webpack');
var filepath = require('./www/filepath');
//提取公用CSS
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var SplitByPathPlugin = require('webpack-split-by-path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToSrc  = path.resolve(__dirname, 'src');
var pathToBuild  = path.resolve(__dirname, 'www/pages');
//页面主控制目录
var controllerSrc = path.resolve(__dirname, 'www','ts','controller');

var _entry = function(options){
    var entry = {};
    for (var name in options) {
        entry[name] = controllerSrc+'/'+options[name];
    }
    return entry;
}

var config = {
    pathToBuild: pathToBuild,
    //未压缩的
    //devtool: "source-map",
    //不输出
    devtool: "false",
    /*--压缩过的--*/
    //devtool:"cheap-source-map",
    //devtool:"eval-source-map",
    //入口文件配置
    entry:_entry(filepath),
    resolve:     {
        extensions: ['', '.js', '.jsx','.ts','.tsx']
    },
    //输出文件配置
    output:      {
        path: path.resolve(__dirname, 'www/dist'),
        chunkFilename: '[name].js',
        filename:   '[name].js',
        publicPath: '/dist/'
    },
    module:      {
        loaders: [
            {
                test:    /\.(js|jsx|tsx|ts)?$/,
                //loaders: ['react-hot', 'babel','ts-loader'],
                loaders: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test:   /\.css$/,
                //构建的CSS
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                
            }
        ],
    },
    preLoaders: [
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader" }
    ],
    plugins:     [
        new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
        new ExtractTextPlugin("app.css"),
         new webpack.optimize.UglifyJsPlugin({
                output: {
                    comments: false
                },
                compress: {
                    warnings: false
                }
            }),
        //commonsPlugin
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename:"common.js"
            
        })
        /*new SplitByPathPlugin([
                    {name: 'common', path: path.join(__dirname, 'node_modules')}
                ]
            ),*/
    ]
};


module.exports = config;
