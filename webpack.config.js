const path = require('path')
const HtmlWebpackPlugins = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        // Salida de nuestro proyecto, distribution
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        //Buscar extensiones
        extensions: ['*', '.mjs', '.js', '.svelte']
    },
    module: {
        rules: [{
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugins({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}