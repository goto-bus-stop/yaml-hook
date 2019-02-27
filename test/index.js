var test = require('tape')

test('sample_document', function (t) {
  t.throws(function () {
    require('./sample_document')
  })
  t.throws(function () {
    require('./sample_document.yml')
  })

  var hook = require('..')()
  t.on('end', function () { hook.revert() })

  t.ok(require('./sample_document'))
  t.ok(require('./sample_document.yml'))
  t.end()
})

test('revert', function (t) {
  var hook = require('..')()
  t.on('end', function () { hook.revert() })

  t.ok(require('./a'))

  hook.revert()

  t.throws(function () {
    require('./b')
  })
  t.end()
})
