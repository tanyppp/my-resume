const express = require('express')
const config = require('../server-config')
const fs = require('fs')
console.log(config)

const app = express()
app.use(express.static(config.staticPath))
app.get('*', (_, res) => res.end(fs.readFileSync(config.staticPath + '/index.html')))
app.listen(config.port, () => {
  console.log('app listen at port: ' + config.port)
})
