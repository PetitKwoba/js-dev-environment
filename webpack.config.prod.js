import path from 'path';
import webpack from 'webpack';

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: [
        path.resolve(__dirname, 'src/index.js') //entry point
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'), //path where the file is saved
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        //Eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),
        // Minify JS
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [ //files to hundle
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    }
}