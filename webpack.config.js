var webpack = require('webpack');
var path = require('path');
var LessPluginCleanCSS = require('less-plugin-clean-css');


module.exports = {
    context: path.join(__dirname, "resources", "assets"),

    entry: "./js/main.js",
    output: {
        path: __dirname + "/public/js/",
        filename: "/main.min.js"
    },

    devServer: {
        contentBase: 'public'
    },

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
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    },
    lessLoader:{
        lessPlugins:[
            new LessPluginCleanCSS({advanced: true})
        ]
    },
    resolve:{
        extensions: ['', '.js', '.es6']
    }

};
