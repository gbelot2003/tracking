var webpack = require('webpack');
var path = require('path');

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
            }
        ]
    },

    resolve:{
        extensions: ['', '.js', '.es6']
    }

};
