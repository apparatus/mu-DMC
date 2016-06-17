var bloomrun = require('boomrun')

module.exports = router

function router () {
  var bloom = bloomrun({indexing: 'depth'})

  return {
    add: add,
    list: list,
    lookup: lookup
  }

  function add (pattern, transport) {
    bloom.add(pattern, transport)
  }

  function list () {
    return bloom.list()
  }

  function lookup (pattern, cb) {
    return bloom.lookup(pattern)
  }

}

