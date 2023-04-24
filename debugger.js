/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-04-24 20:53:42
 * @LastEditTime: 2023-04-24 21:07:09
 * @LastEditors: wsy
 */
import { rollup } from 'rollup'
import config from './rollup.config.js'

async function build() {
  try {
    const bundle = await rollup(config.input)
    const { output } = await bundle.generate(config.output)
    await bundle.write(config.output)
    console.log(output)
    await bundle.close()
  }
  catch (error) {
    console.log('========================')
    console.log('error', error)
    console.log('========================')
  }
}

build()
