'use strict'
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const c = require('./constants');

const devUrl = c.PROTOCOL + '://' + c.DEV_DOMAIN + ':' + c.DEV_PORT;

exports.common = {
    output: {
        path: c.PATHS.build,
        filename: 'app.js',
        publicPath: devUrl  + '/' + c.BUILD_PATH
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less']
    }
}

exports.entry = function (entryPoint, isProd) {
    let app = [entryPoint];
    if (!isProd) {
        app = [
            'webpack-dev-server/client?' + devUrl, // WebpackDevServer host and port
            'webpack/hot/dev-server',
            entryPoint
        ];
    }
    
    return {
        entry: app
    };
}

exports.setupCSS = function (paths, isProd) {
    if (isProd) {
        return {
            module: {
                loaders: [
                    {
                        test: /\.less$/,
                        loader: ExtractTextPlugin.extract('style', 'css!less'),
                        include: paths
                    }
                ]
            },
            plugins: [new ExtractTextPlugin('app.css')]
        };
    }

    return {
        module: {
            loaders: [
                {
                    test: /\.less$/,
                    loader: 'style!css!less',
                    include: paths
                }
            ]
        }
    };
}

exports.setFreeVariable = function(key, value){
    const env = {};
    env[key] = JSON.stringify(value);
    
    return {
        plugins: [
            new webpack.DefinePlugin(env)
        ]
    }
}

exports.processJS = function(paths, isProd) {
    var js = {
        module: {
            loaders: [
                {
                    test: /\.js$|\.jsx$/,
                    loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=react'],
                    include: paths
                }
            ]
        }
    };
    
    if(isProd) {
        js.module.loaders = [
            {
                test: /\.js$|\.jsx$/,
                loaders: ['babel-loader?presets[]=es2015,presets[]=react'],
                include: paths
            }
        ];
    }
    
    return js;
}
