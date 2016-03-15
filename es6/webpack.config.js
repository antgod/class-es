var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var src="./src/";
var fs=require("fs");
var path=fs.readdirSync(src);
var entry={};

path.forEach(function(item){

    var status=fs.statSync(src+item);
    if(status.isDirectory()){
        return false;
    }

    entry[item.split(".")[0]]=src+item;
});

module.exports = {
    entry: entry,
    output: {
        path: './output',
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            { test: /\.css$/, loader: "style!css" },
            {test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
    ]
};