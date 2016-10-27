'use strict';

/**
 * Created by x on 11/23/15.
 */
var path = require('path');

var fs = require('fs');
var app_config = require('./config');
/**
 * 导入文件入口
 * @type {{index: string, details: string}|exports|module.exports}
 */
var webpack           = require('webpack');
//var filepath = require('./www/filepath');
//html模板插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
//提取公用CSS
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, 'node_modules');
//网站根目录
var pathToBuild  = path.resolve(__dirname,app_config.pathToBuild);
//模板位置
var viewPath = path.resolve(__dirname,app_config.pathToBuild,app_config.viewPath);
//页面主控制目录
var controllerSrc = path.resolve(__dirname,app_config.pathToBuild, app_config.controllerPath);
var componentsSrc = path.resolve(__dirname,app_config.pathToBuild, app_config.componentsSrc);

/**
 * 读取配置文件
 */
var filepath = (function(){
    var files_names= {};
    var regtsx = /(.*).tsx/;
    var fileNames = fs.readdirSync(controllerSrc, function(err, files){
    if(err){console.log(err);return false;};
    return files
    });

    fileNames.forEach(function(v){
    var tsx = v.match(regtsx);
    if(tsx){
        if(!files_names[tsx]){
        files_names[tsx[1]] = tsx[1];
        }
    }
    });
    return files_names;
})();

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
    devtool: "source-map",
    /*入口文件配置 编译的文件加文件路径
    {name:value}
    */
    entry:_entry(filepath),
    resolve:     {
        root:componentsSrc,
        
        /**
         * alias配置项，可以为常用模块配置改属性，可以节省编译的搜索时间。例如：

         */
       /*alias:{
            'verifier':'/www/pub/Verifier.ts'
        },*/
        /**
         * 扩展的文件后缀名
         */
        extensions: ['', '.js', '.jsx','.ts','.tsx'],
        /**

         * 有时候你的node_modules包可能会放在上层父文件夹中，这时你可以使用resolve.moduledirectories来扩张你的索引路径，例如我们给redux做一个alias：

         * /a/b/node_module/redux/dist/redux

            /a/node_module/redux/dist/redux

            /node_module/redux/dist/redux

         */

        moduledirectories:['node_modules'],
    },
    //输出文件配置
    output:      {
        //path: path.resolve(__dirname, 'www/dist'),
        path: path.resolve(__dirname,app_config.pathToBuild,app_config.output),
        chunkFilename: '[name].js',
        filename:   '[name].js',
        //publicPath:'/dist/'
        publicPath: '/' + app_config.output + '/'
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
        /*new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                output: {
                    comments: false
                },
                compress: {
                    warnings: false
                }
            }),*/
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
var fileNames2 = fs.readdirSync(viewPath, function(err, files){
    if(err){console.log(err);return false;};
    return files;
});
/**
 * 动态插入多页模板
 */
fileNames2.forEach(function(v){
    var regtsx = /(?:\w*)(?=.ejs)/;
    /**
        如果不已ejs 结尾的不处理
    **/
    if(v.match(regtsx)){
        var chunksContainer = titleCase3(v.match(regtsx)[0]) + 'Container';
        var htmlConfig = {
            addLinkCss:app_config.addLinkCss,
            addmommonScript:app_config.addmommonScript,
            template: viewPath +'/'+ v,
            //template: './www/view/'+ v,
            //输出html的文件名，依赖于输出环境目录下输出的目录为 output 下的输出目录
            filename:'./'+app_config.htmlFileName+'/' + (v.match(regtsx)[0]) +'.html',
            //filename:path.resolve(__dirname,app_config.pathToBuild,app_config.htmlFileName) + '/' + (v.match(regtsx)[0]) +'.html',
            chunks:['common',chunksContainer],
            hash:true
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
