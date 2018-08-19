'use strict'

const path = require('path')
const buildPath = path.join(__dirname, 'docs/build')

module.exports = {
    entry: './docs/showcase/index.test.js',
    output: {
        path : buildPath,
        filename: 'build.index.js'
    }
}
