const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../src/public'),
    chainWebpack: config => config.resolve.symlinks(false)
}