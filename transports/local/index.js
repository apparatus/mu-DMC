var bloomrun = require('bloomrun')
var bloom = bloomrun({indexing: 'depth'})

module.exports = function (opts) {

  function add(pattern, fn) {
    bloom.add(pattern, fn)
  }

  function act(args, cb) {
    var match = bloom.lookup(args)

    match(args, cb || function (err) {
      if (err) { 
        console.error('mu error: ', err) 
      }
    })
  }
}