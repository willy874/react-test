const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'index.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@base': path.resolve(__dirname, 'src/'),
        },
        modules: [
            'node_modules'
        ]
    },
    module:{
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: false,
                    }
                }
            ]
        },{
            test: /\.js|jsx|cjs$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader', 
            }
        }]
    }
}