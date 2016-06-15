import {route} from 'mu'
import {httpTport, localTport} from 'mu/transports'

const http = httpTport()
const local = localTport()

route({ns: 'cmp'}, local)
route('*', http)

local.listen()
http.listen(8080)
