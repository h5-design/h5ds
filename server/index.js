const Koa = require('koa')
const serve = require('koa-static')

const app = new koa()

app.use(serve('../dist'))

app.listen(3333)
