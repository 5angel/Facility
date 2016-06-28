var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/js/entry',
    devtool: 'source-map',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    resolve: {
        root: path.resolve('./src')
    },
    plugins: [
        new webpack.ProvidePlugin({ riot: 'riot' }),
    ],
    postcss: function () {
        return [autoprefixer];
    },
    module: {
        preLoaders: [{
            test: /\.tag$/,
            loader: 'riotjs-loader'
        }],
        loaders: [{
            test: /\.js$|\.tag$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.styl$/,
            loader: 'style!css!postcss!stylus'
        }, {
            test: /.*\.(gif|png|jpe?g|svg)$/,
            loaders: [
                'file.[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }]
    }
};
