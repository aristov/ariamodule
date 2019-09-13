'use strict'

const path = require('path')

const rules = [
    /*{
        test : /\.css$/,
        use : [
            'style-loader',
            {
                loader : 'css-loader',
                options : {
                    importLoaders : 1,
                    url : false
                }
            },
            'postcss-loader'
        ]
    }*/
]

if(process.env.NODE_ENV === 'production') {
    rules.push({
        test : /\.js$/,
        exclude : /(node_modules\/babel-polyfill|node_modules\/dom4|node_modules\/shim-keyboard-event-key)/,
        use : { loader : 'babel-loader' }
    })
}

module.exports = {
    mode : 'none',
    entry : './lib/index.js',
    output : {
        path : path.join(__dirname, 'dist'),
        filename : 'dist.ariamodule.js'
    },
    module : { rules }
}
