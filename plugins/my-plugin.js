/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-04-26 22:28:30
 * @LastEditTime: 2023-05-04 21:54:22
 * @LastEditors: wsy
 */
function MyPlugins(options = {}) {
  console.log('========================')
  console.log('配置对象', options)
  console.log('========================')
  return {
    name: 'progress-bar',
    options(options) {
      console.log('========================')
      console.log('options')
      console.log('========================')
    },
    buildStart(options) {
      console.log('========================')
      console.log('options')
      console.log('========================')
    },
    resolveId(source, importer, options) {
      console.log('========================')
      console.log('source', source)
      console.log('importer', importer)
      console.log('options', options)
      console.log('========================')
    },
    load(id) {
      console.log('========================')
      console.log('id', id)
      console.log('========================')
    },
    transform(code, id) {
      console.log('========================')
      console.log('code', code)
      console.log('id', id)
      console.log('========================')
    },
    moduleParsed(module) {
      console.log('========================')
      console.log('module', module)
      console.log('========================')
    },
    resolveDynamicImport(specifier, importer) {
      console.log('========================')
      console.log('specifier', specifier)
      console.log('importer', importer)
      console.log('========================')
    },
    buildEnd(error) {
      console.log('========================')
      console.log('error', error)
      console.log('========================')
    },
  }
}
export default MyPlugins
