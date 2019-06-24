
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development', //'production',
    devtool: 'eval-source-map',
    entry: [
        './js/main.js'
    ],
    module: {
        rules: [
            {
                test: /\.(html)$/i,
                use: 'raw-loader',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true,
                    loaders: {
                        js: 'babel-loader!eslint-loader'
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}