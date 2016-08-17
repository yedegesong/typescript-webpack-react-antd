'use strict';

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
//html模板插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
//提取公用CSS
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToSrc  = path.resolve(__dirname, 'src');
var pathToBuild  = path.resolve(__dirname, 'www');
//模板位置
var viewPath = path.resolve(__dirname, 'view');
//页面主控制目录
var controllerSrc = path.resolve(__dirname, 'www','ts','controller');
var componentsSrc = path.resolve(__dirname, 'www','ts','components');
var _entry = function(options){
    var entry = {};
    for (var name in options) {
        entry[name] = controllerSrc+'/'+options[name];
    }
    return entry;
}
/**
 * 将字符串首字母大写
 * @param 
 * @returns {string}
 */
function titleCase3(s) {
    return s.toLowerCase().split(/\s+/).map(function(item, index) {
        return item.slice(0, 1).toUpperCase() + item.slice(1);
    }).join(' ');
}
var config = {
    pathToBuild: pathToBuild,
    devtool: "cheap-source-map",
    /*入口文件配置 编译的文件加文件路径
    {name:value}
    */
    entry:_entry(filepath),
    resolve:     {
        root:componentsSrc,
        /**
         * 扩展的文件后缀名
         */
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
                //loaders:['ts-loader'],
                loaders: ['react-hot', 'babel','ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
            /*{
                test:   /\.css$/,
                loader: 'style!css'
            }*/
        ],
    },
    preLoaders: [
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader" }
    ],
    /*externals:{
        'react' :'React'
    },*/
    plugins:     [
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename:"common.js"
        }),
        new webpack.HotModuleReplacementPlugin()
       /* new HtmlWebpackPlugin({
            title: '公用模块调试',
            template: './view/login.ejs',
            filename:'login.html',
            chunks:['common','LoginContainer'],
        })*/
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
    /**
        如果不已ejs 结尾的不处理
    **/
    if(v.match(regtsx)){
        var chunksContainer = titleCase3(v.match(regtsx)[0]) + 'Container';
        var htmlConfig = {
        template: './view/' + v,
        filename:'./pages/' + (v.match(regtsx)[0]) +'.html',
        chunks:['common',chunksContainer],
         }
    
        config.plugins.push(new HtmlWebpackPlugin(htmlConfig));
    }
    
});

/*var htmlConfig = {
    title: '公用模块调试',
    template: './view/login.ejs',
    filename:'./pages/login.html',
    chunks:['common','LoginContainer'],
}

config.plugins.push(new HtmlWebpackPlugin(htmlConfig));*/

module.exports = config;
