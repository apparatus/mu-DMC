import {route} from 'mu'
import {createHttp, createLocal} from 'mu/transports'

const local = createLocal()
const http = createHttp()

route({ns: 'cmp'}, local)
route('*', http)

local.listen()
http.listen(8080)
