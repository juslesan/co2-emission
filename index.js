const http = require('http')
const express = require('express')
const app = express()
const config = require('./utils/config')
const axios = require('axios');
const cors = require('cors')

const populationsRouter = require('./routers/populations')
const pollutionsRouter = require('./routers/pollutions')
const xmlReader = require('./external_apis/xmlReader')
app.use(cors())
// app.use(bodyParser.json())

app.use(populationsRouter)
app.use(pollutionsRouter)
// app.use(xmlReader)
app.use(axios)
const server = http.createServer(app)


server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

// console.log(data)


module.exports = {
  app, server
}