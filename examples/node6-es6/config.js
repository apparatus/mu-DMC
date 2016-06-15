const {route} = require('mu')
const {httpTport, localTport} = require('mu/transports')

const local = localTport()
const local = httpTport()

route({ns: 'cmp'}, local)
route('*', http)

local()
http(8080)