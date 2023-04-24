/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-04-20 22:20:59
 * @LastEditTime: 2023-04-24 22:14:57
 * @LastEditors: wsy
 */
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: {
    a: 'src/index.js',
  },
  output: {
    dir: 'dist',
    entryFileNames: 'js/[name].js',
    chunkFileNames: 'asset/[name].js',
    format: 'esm',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
  ],
}
