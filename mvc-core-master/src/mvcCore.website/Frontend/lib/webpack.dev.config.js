const merge = require('webpack-merge');
const parts = require('./webpackParts');
const webpack = require('webpack');
const c = require('./constants');

module.exports = merge(
    parts.common, 
    {
        devtool: 'eval-source-map'
    },
    parts.entry(c.PATHS.app),
    parts.setupCSS(c.PATHS.style),
    parts.processJS(c.PATHS.root),
    {
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    }
);