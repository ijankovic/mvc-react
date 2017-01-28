const merge = require('webpack-merge');
const parts = require('./webpackParts');
const webpack = require('webpack');
const c = require('./constants');

module.exports = merge(
    parts.common,
    {
        devtool: 'eval-source-map'
    },
    parts.entry(c.PATHS.app, true),
    parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
    ),
    parts.processJS(c.PATHS.app, true),
    parts.setupCSS(c.PATHS.style, true)
);