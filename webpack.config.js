var path = require('path');
var webpack = require('webpack');

module.exports = {

    devtool: 'cheap-module-eval-source-map',
    entry: [

        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index'
    ],
    output: {

        path: path.join( __dirname, 'dist' ),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [

        new webpack.optimize.OccurrenceOrderPlugin( ),
        new webpack.HotModuleReplacementPlugin( ),
        new webpack.NoEmitOnErrorsPlugin( )
    ],
    module: {

        rules: [
            {

                test: /\.js$/,
                use: [
                    {
                        loader: 'react-hot-loader'
                    },
                    {
                        loader: 'babel-loader',
                        options: {

                            plugins: ['transform-runtime'],
                            presets: ["es2015", "stage-0", "react"]
                        },

                    }
                ],

                include: [
                    path.resolve(__dirname, "src")
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    }
};