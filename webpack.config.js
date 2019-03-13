const path = require('path');

module.exports = [{
    entry: path.resolve(__dirname, "./src/index.js"),
    mode: "production",
    output: {
        library: "agcMicroApps",
        libraryTarget: "commonjs",
        path: path.resolve(__dirname, "./dist"),
        filename: "agc-micro-apps.js"        
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}]