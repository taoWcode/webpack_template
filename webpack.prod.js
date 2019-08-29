/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-08-24 00:10:11
 * @version $Id$
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common,{
    // devtool:'source-map',
    mode:'production',
    plugins:[
        new webpack.DefinePlugin({
            "process.env.NODE_EVN":JSON.stringify('production')
        })
    ]
})