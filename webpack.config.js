'use strict'

const path = require('path')
const buildPath = path.join(__dirname, 'docs/build')

const CSS_EXT_RE = /\.css$/

const rules = [
    {
        test : CSS_EXT_RE,
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
    }
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
    entry : './docs/showcase/index.test.js',
    output : {
        path : buildPath,
        filename : 'build.index.js'
    },
    module : { rules }
}
