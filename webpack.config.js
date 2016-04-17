var webpack = require('webpack');
var path = require('path');

module.exports = {
    cache: true,
    context: path.join(__dirname, "resources", "assets"),

    entry: "./js/main.js",
    output: {
        path: __dirname + "/public/js/",
        filename: "/main.min.js"
    },

    devServer: {
        contentBase: 'public'
    },
    devtool: "source-map", // or "inline-source-map"
    module: {
        loader:[
            {
                test:/\.js$/,
                exclude: "node_modules",
                loader: 'babel-loader',
            },
            {
                test:/\.html$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'raw'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            }
        ]
    },

    resolve:{
        extensions: ['', '.js', '.es6']
    }

};
