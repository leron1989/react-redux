const path = require("path");

module.exports = {
    entry:{
        app:'./src/index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        port:7000
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders:'babel-loader',
                query:{
                    presets:['es2015','react','stage-0']
                }
            }
        ]
    }
}