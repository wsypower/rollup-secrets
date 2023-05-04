/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-04-20 22:20:59
 * @LastEditTime: 2023-05-04 13:15:21
 * @LastEditors: wsy
 */
// import MyPlugins from './plugins/my-plugin.js'
import virtualModule from './plugins/virtual-module.js'

export default {
  input: {
    a: 'src/index.js',
  },
  output: {
    dir: 'dist1',
  },
  plugins: [
    // MyPlugins({
    //   name: 'my-plugin',
    // }),
    virtualModule(),
    // nodeResolve(),
    // commonjs(),
    // progressBar(),
  ],
}
