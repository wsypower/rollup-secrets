/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-04-20 22:20:59
 * @LastEditTime: 2023-04-24 20:51:37
 * @LastEditors: wsy
 */
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
  ],
}
