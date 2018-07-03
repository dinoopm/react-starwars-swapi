var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

var DIST_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "client");

var config = {
    entry: SRC_DIR+"/app/index.js",
    output: {
        path:  DIST_DIR,
        filename: "bundle.js"
    },
    devtool: 'source-map',
    devServer: {
        host: '127.0.0.1',
        port: 7000,
        open: true     
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(jpg|png|ico)$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'img/',
                    publicPath: 'img/'
                  }
                }]
            }
        ]
    }

};

module.exports = config;