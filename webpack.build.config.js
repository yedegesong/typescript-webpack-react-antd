'use strict';
/**
 * webpack 构建配置
 */
/**
 * Created by x on 11/23/15.
 */
var path = require('path');

var fs = require('fs');
/**
 * 导入文件入口
 * @type {{index: string, details: string}|exports|module.exports}
 */
var webpack           = require('webpack');
var filepath = require('./www/filepath');
//提取公用CSS
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//html模板插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var SplitByPathPlugin = require('webpack-split-by-path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToSrc  = path.resolve(__dirname, 'src');
var pathToBuild  = path.resolve(__dirname, 'www/pages');
//页面主控制目录
var controllerSrc = path.resolve(__dirname, 'www','ts','controller');
//模板位置
var viewPath = path.resolve(__dirname, 'view');
var _entry = function(options){
    var entry = {};
    for (var name in options) {
        entry[name] = controllerSrc+'/'+options[name];
    }
    return entry;
}
/**
 * 将字符串首字母大写
 * @param s
 * @returns {string}
 */
function titleCase3(s) {
    return s.toLowerCase().split(/\s+/).map(function(item, index) {
        return item.slice(0, 1).toUpperCase() + item.slice(1);
    }).join(' ');
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
    ]
};
/**
 *  读取模板文件
 * @type {string[]}
 */
var fileNames = fs.readdirSync(viewPath, function(err, files){
    if(err){console.log(err);return false;};
    return files;
});

/**
 * 动态插入多页模板
 */
fileNames.forEach(function(v){
    var regtsx = /(?:\w*)(?=.ejs)/;
    var chunksContainer = titleCase3(v.match(regtsx)[0]) + 'Container';
    var htmlConfig = {
        template: './view/' + v,
        filename:'./pages/' + (v.match(regtsx)[0]) +'.html',
        chunks:['common',chunksContainer],
    }

    config.plugins.push(new HtmlWebpackPlugin(htmlConfig));
});

module.exports = config;
