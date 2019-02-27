'use strict'

var pirates = require('pirates')
var yaml = require('js-yaml')

module.exports = yamlHook

var result
Object.defineProperty(yamlHook, 'result', {
  value: function () {
    var r = result
    result = null
    return r
  }
})

function yamlHook () {
  function hook (code) {
    result = yaml.safeLoad(code)
    return 'module.exports = require(' + JSON.stringify(__filename) + ').result()'
  }

  var revert = pirates.addHook(hook, {
    exts: ['.yml', '.yaml']
  })

  return { revert: revert }
}
