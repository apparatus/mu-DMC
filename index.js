var bloomrun = require('boomrun')

function mu (opts) {
  opts = opts || {}

  // DMC: important for router pattern
  if (opts.mu) { return opts.mu }

  var bloom = bloomrun()

  var exp = {
    route: route,
    define: define,
    act: act,
    list: list, // DMC: important for http api layer integration
    mu: exp // DMC: api: es6 (see examples)
  }

  return exp // DMC: api: es6 (see examples)

  function route (pattern, cb) {

  }

  function define (pattern, cb) {

  }

  function act (args, cb) {

  }

  function list (pattern, opts) {
    return bloom.list(pattern, opts)
  }
}

mu.create = mu // DMC: api: es6 (see examples)

module.exports = mu
