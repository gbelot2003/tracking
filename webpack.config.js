var webpack = require('webpack');
var path = require('path');
var PROD = JSON.parse(process.env.PROD_ENV || '0');

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
            {   test: path.join(__dirname, 'resources', 'assets', 'js'),
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test:/\.html$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'raw'
            },
            {
                test: /\.css$/, loader: "style-loader!css-loader"
            },
            {
                test: /\.png$/, loader: "url-loader?limit=200000"
            },
            {
                test: /\.jpg$/, loader: "file-loader"
            }
        ]
    },

    plugins: [
    
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery'
        }),
/*        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        )*/
    ],

    resolve:{
        extensions: ['', '.js', '.es6'],
        modulesDirectories: ["node_modules", "bower_components"]
    }

};

