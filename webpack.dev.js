/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-08-24 00:09:55
 * @version $Id$
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common,{
    devtool:'inline-source-map',
    mode:'development',
    plugins:[
        new webpack.HotModuleReplacementPlugin(),//本地热模块替换
    ],
    devServer:{
        hot:true,
        contentBase:path.join(__dirname,'./dist'),
        port:'9090',
        // host:'0.0.0.0',
        historyApiFallback:true,//所有404链接都跳转到index
        proxy:{
            //代理到后端的服务地址，会拦截所有以api开头的请求地址
            '/api':"http://localhost:3000"
        },
       
    },
     plugins:[
            new webpack.DefinePlugin({
                "process.env.NODE_ENV":JSON.stringify('development')
            })
    ]
});
