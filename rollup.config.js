'use strict'
import path from 'path'
import nodeResolve from 'rollup-plugin-node-resolve'
import jsonResolve from 'rollup-plugin-json'

export default {
  input: path.resolve('src/index.js'),
  plugins: [nodeResolve(), jsonResolve()],
  output: {
    file: 'dist/rollup-index.js',
    format: 'cjs',
    banner: '// this is created from /src/index.js'
  }
}
