// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var isDebug = process.env.NODE_ENV === "dev";
var src = path.resolve(__dirname, 'assets/js/');

function getPlugins() {
    var plugins = [

        //Make jQuery is global
        new webpack.ProvidePlugin({            
            $: 'jquery',
            jQuery: 'jquery', 
            Popper: ['popper.js', 'default'],
            // In case you imported plugins individually, you must also require them here:
            // Util: "exports-loader?Util!bootstrap/js/dist/util",
            // Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",            
        }),
        new webpack.SourceMapDevToolPlugin({
          filename: '[name].js.map',
          exclude: ['popper.js.map']
        })        
    ];

    // Always expose NODE_ENV to webpack, you can now use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    }));

    return plugins;
}

module.exports = {
    entry: {
        ["index.min"]: [src + '/index.js']
    },
    optimization: {
        minimize: !isDebug
    },
    output: {
        path:  src,
        filename:"[name].js",
        libraryTarget: "var"
    },
    // externals: {
    //     "jquery": "jQuery"
    // },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },

    plugins: getPlugins(),

    resolve: {
        modules: [
           src, "node_modules"
        ],
        extensions: ['.js']
    }
};