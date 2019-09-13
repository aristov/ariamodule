'use strict'

const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = [
    {
        mode : 'none',
        entry : './lib/index.js',
        output : {
            path : path.join(__dirname, 'dist'),
            filename : 'dist.ariamodule.js'
        }
    },
    {
        mode : 'none',
        entry : './lib/index.js',
        output : {
            path : path.join(__dirname, 'dist'),
            filename : 'dist.ariamodule.min.js'
        },
        module : {
            rules : [
                {
                    test : /\.js$/,
                    exclude : /(node_modules\/babel-polyfill|node_modules\/dom4|node_modules\/shim-keyboard-event-key)/,
                    use : { loader : 'babel-loader' }
                }
            ]
        },
        plugins : [
            new UglifyJsPlugin({
                uglifyOptions : {
                    keep_fnames : true,
                    keep_classnames : true,
                    output : {
                        comments : false
                    }
                }
            })
        ]
    },
    {
        mode : 'none',
        entry : './docs/example.js',
        output : {
            path : path.join(__dirname, 'docs/build'),
            filename : 'build.example.js'
        }
    }
]
