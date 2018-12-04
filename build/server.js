const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const path = require('path')

const app = express()
const config = require('./webpack.dev.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.use('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})

app.use(express.static('./', {
  extensions: ['html']
}))

const port = 3000
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!\n`)
})
