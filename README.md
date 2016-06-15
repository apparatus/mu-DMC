# mu

Fullstack Microservice Pattern Routing


[![js-spacey-standard-style](https://img.shields.io/badge/code--style-spacey--standard-brightgreen.svg)](https://github.com/davidmarkclements/spacey-standard)


## Examples

### Node 6

#### routes.js

```js
const {create} = require('mu')
const {createHttp, createLocal} = require('mu/transports')

const {route, mu} = create()
const local = createLocal()
const http = createHttp()

route({ns: 'cmp'}, local)
route('*', http)

local.listen()
http.listen(8080)

module.exports = mu
```

#### service.js

```js
const {create} = require('mu')
const {define, act} = create(require('./routes'))

const ns = 'my-service'

define({ns, cmd: 'action1'}, ({data}, cb) => {
  cb(null, {data})
})

define({ns, cmd: 'action2'}, ({data}, cb) => {
  act({ns: 'another-service', ...data}, cb)
})
```

### EcmaScript 6

#### routes.js

```js
import {create} from 'mu'
import {createHttp, createLocal} from 'mu/transports'

const mu = create()
const {route} = mu

const local = createLocal()
const http = createHttp()

route({ns: 'cmp'}, local)
route('*', http)

local.listen()
http.listen(8080)

export default mu
```

#### service.js

```js
import {create} from 'mu'
import routes from './routes'

const {define, act} = create(routes)

const ns = 'my-service'

define({ns, cmd: 'action1'}, ({data}, cb) => {
  cb(null, {data})
})

define({ns, cmd: 'action2'}, ({data}, cb) => {
  act({ns: 'another-service', ...data}, cb)
})
```

### EcmaScript 5

#### routes.js

```js
var mu = require('mu')()
var local = require('mu/transports/local')()
var http = require('mu/transports/http')()

mu.route({ns: 'cmp'}, local)
mu.route('*', http)

local.listen()
http.listen(8080)

module.exports = mu
```

#### service.js

```js
var mu = require('mu')(require('./routes'))

mu.define({ns: 'my-service', cmd: 'action1'}, function (args, cb) {
  cb(null, {data: 'data'})
})

mu.define({ns: 'my-service', cmd: 'action2'}, function (args, cb) {
  cb(null, {data: 'data'})
})

mu.define({ns: 'my-service', cmd: 'action3'}, function (args, cb) {
  mu.act({ns: 'another-service', data: args.data}, cb)
})
```

