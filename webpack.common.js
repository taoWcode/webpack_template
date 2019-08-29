/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-08-24 00:09:09
 * @version $Id$
 */
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');//清除dist包
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurifyCss = require('purifycss-webpack');
const glob = require('glob-all');
const webpack = require('webpack');

module.exports = {
    entry:{
        "index":"./src/index.js"
    },
    output:{
        filename:'[name].[hash].js',
        path:path.resolve(__dirname,'dist'),
        // publicPath:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:'/node_modules/',
                use:[
                    {"loader":"babel-loader"}
                ]
            },
            {
                test:/\.scss$/,
                exclude:'/node_modules/',
                use:[
                    //"style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"]
            },
            {
                test:/\.css$/,
                exclude:'/node_modules',
                use:["style-loader","css-loader"]
            },
            {
                test:/\.(jpg|gif|jpeg|svg|png)$/,
                use:[
                    {
                        "loader":"url-loader",
                        options:{
                            outputPath:'images/',//图片输出路径
                            limit:10 * 1024,
                            // publicPath:path.resolve(__dirname,'./dist/image')
                        }
                    },
                    ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'webpack构建react环境',
            filename:'index.html',
            template:path.join(__dirname,'src/index.html')
        }),
        new CleanWebpackPlugin(),
        
        new webpack.ProvidePlugin({
            $:'jquery',//全局使用jq
        }),
        new PurifyCss({
            paths:glob.sync([
                //要做CSS Tree Shaking 的路径
                path.join(__dirname, './src/*.html'),
                path.join(__dirname, './src/*.js'),
                path.join(__dirname, './src/pages/*.jsx'),
                path.join(__dirname, './src/assets/style/*.scss')
            ])
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename:"[id].css",
            outputPath:'css/'
        }),

    ],
    resolve:{
        extensions:[".js", ".jsx", ".scss", ".css"],
        alias:{
            "@":path.join(__dirname,"src/"),
            "router":path.join(__dirname,"src/router"),
            "pages":path.join(__dirname,"src/pages"),
            "style":path.join(__dirname,"src/assets/style"),
            "images":path.join(__dirname,"src/assets/images")
        }

    },
    optimization:{
        usedExports:true,//JS Thress shaking
        splitChunks:{
            chunks:'async',//公共代码
        }
    }
}