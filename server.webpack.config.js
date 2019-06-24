
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: 'development', //'production',
    devtool: 'eval-source-map',
    entry: [
        './js/server.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'server.js'
    },
    target: 'node',
    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false,   // if you don't put this is, __dirname
        __filename: false,  // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    module: {
        rules: [
            {
                test: /\.(html)$/i,
                use: 'raw-loader',
            }
        ],
    },
    plugins: [
        
    ],
    /*node: {
        fs: "empty",
        net: "empty"
    }*/
}