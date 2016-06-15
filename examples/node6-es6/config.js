const {route} = require('mu')
const {httpTport, localTport} = require('mu/transports')

const local = localTport()
const http = httpTport()

route({ns: 'cmp'}, local)
route('*', http)

local.listen()
http.listen(8080)
