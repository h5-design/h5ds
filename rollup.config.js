'use strict'
import path from 'path'
import nodeResolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs'
import alias from 'rollup-plugin-alias'
// import typescript from 'rollup-plugin-typescript'
// import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

export default {
  input: path.resolve('src/index.js'),
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    nodeResolve(),
    commonjs(),
    json(),
    alias({
      core: './src/core',
      src: './src',
      resolve: ['.jsx', '.js', '.vue', '.json']
    })
  ],
  output: [
    {
      file: 'dist/h5ds.esm.js',
      format: 'es'
    },
    {
      file: 'dist/h5ds.cmd.js',
      format: 'cjs'
    },
    {
      file: 'dist/h5ds.iife.js',
      format: 'iife'
    },
    {
      file: 'dist/h5ds.umd.js',
      format: 'umd'
    },
    {
      file: 'dist/h5ds.amd.js',
      format: 'amd'
    }
  ],
  watch: {
    exclude: ['node_modules/**']
  }
}
