var webpack = require('webpack');  
var WebpackDevServer = require('webpack-dev-server');  
var config = require('./webpack.dev.config');
var c = require('./constants');


new WebpackDevServer(webpack(config), {  
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
}).listen(3030, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at ' + config.output.publicPath);
});