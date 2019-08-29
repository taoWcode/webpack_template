/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-08-26 02:56:17
 * @version $Id$
 */
const path = require('path');
const webpack = require('webpack');

const src = path.resolve(process.cwd(),'src');//源码目录
const evn = process.env.NODE_EVN == 'production' ? 'production' : 'development';

module.exports = {
    mode:'production',
    entry:{
        jquery:['jquery']
    },
    output:{
        path:path.resolve(__dirname,'..','dll'),
        filename:'[name].dll.js',
        library:'[name]_[hash]',
        libraryTarget:'this',
    },
    plugins:[
        new webpack.DllPlugin({
            context:process.cwd(),
            path:path.resolve(__dirname,'..','dll/[name].manifest.json'),
            name:'[name]_[hash]'
        })
    ]
}