var bloomrun = require('boomrun')

function mu (opts) {
  opts = opts || {}

  // DMC: important for router pattern
  if (opts.mu) { return opts.mu }

  var bloom = bloomrun({indexing: 'depth'})

  var exp = {
    route: route,
    define: define,
    act: act,
    list: list // DMC: important for http api layer integration
  }
  exp.mu = exp // DMC: api: es6 (see examples)
  return exp

  function route (pattern, cb) {

  }

  function define (pattern, cb) {

  }

  function act (args, cb) {

  }

  function list (pattern, opts) {
    return bloom.list(null, {patterns: true})
  }
}

mu.create = mu // DMC: api: es6 (see examples)

module.exports = mu
