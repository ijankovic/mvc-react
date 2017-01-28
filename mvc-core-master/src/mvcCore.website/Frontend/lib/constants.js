const path = require('path');

exports.PATHS = {
    app: path.join(__dirname, '../app'),
    build: path.join(__dirname, '../../wwwroot/build')
};

exports.PROTOCOL = 'http';
exports.DEV_DOMAIN = 'localhost';
exports.DEV_PORT = 3030;
exports.BUILD_PATH = 'build';
