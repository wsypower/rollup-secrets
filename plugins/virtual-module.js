/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-05-04 22:07:48
 * @LastEditTime: 2023-05-04 22:15:00
 * @LastEditors: wsy
 */
function virtualModule(options = {}) {
  console.log('========================')
  console.log('配置对象', options)
  console.log('========================')
  return {
    name: 'progress-bar',
    buildStart(options) {
      console.log('========================')
      console.log('start')
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
      const parse = this.getModuleInfo(id)
      console.log(parse)
    },
    transform(code, id) {
      console.log('========================')
      console.log('code', code)
      console.log('id', id)

      const parse = this.parse(code)
      console.log(parse)
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
    buildEnd() {
      console.log('========================')
      console.log('end')
      console.log('========================')
    },
  }
}
export default virtualModule
