/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-04-24 20:53:42
 * @LastEditTime: 2023-05-04 12:59:41
 * @LastEditors: wsy
 */
import { rollup } from 'rollup'
import config from './rollup.config.js'

async function build() {
  try {
    const bundle = await rollup(config.input)
    const { output } = await bundle.generate(config.output)
    await bundle.write(config.output)
    await bundle.close()
  }
  catch (error) {
    console.log('========================')
    console.log('error', error)
    console.log('========================')
  }
}

build()
