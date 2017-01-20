import nodeResolve from 'rollup-plugin-node-resolve'

export default {
    entry: 'index.js',
    plugins: [nodeResolve({ jsnext: true })],
    targets: [
        {
            dest: 'dist/build.index.js',
            format: 'iife',
        }
    ]
};
