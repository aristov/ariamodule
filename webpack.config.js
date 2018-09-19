'use strict'

const path = require('path')
const buildPath = path.join(__dirname, 'docs/build')

module.exports = {
    entry: './docs/showcase/index.test.js',
    output: {
        path : buildPath,
        filename: 'build.index.js'
    },
    module : {
        rules : process.env.NODE_ENV === 'production'? [
            {
                test : /\.js$/,
                exclude: /(node_modules\/babel-polyfill|node_modules\/dom4|node_modules\/shim-keyboard-event-key)/,
                use : { loader : 'babel-loader' }
            }
        ] : []
    }
}
