const http = require('http')
const express = require('express')
const app = express()
const config = require('./utils/config')
const axios = require('axios');
const cors = require('cors')

const countryRouter = require('./routers/country')
const superpowersRouter = require('./routers/superpowers')
const populationsRouter = require('./routers/populations')
const pollutionsRouter = require('./routers/pollutions')
const csvReader = require('./external_apis/csvReader')
const worldbankCSV = require('./external_apis/worldbankCSV')

app.use(cors())
// app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('<h1>Co2-emissions!</h1> <p> To search for emissions by country name -> /country/:name </p> <p> To search for superpower data -> /superpowers </p> ')
})

app.use(populationsRouter)
app.use(pollutionsRouter)
app.use('/country', countryRouter)
app.use('/superpowers', superpowersRouter)
app.use(axios)


const server = http.createServer(app)


var PORT = process.env.PORT || 3003

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// server.listen(config.port, () => {
//   console.log(`Server running on port ${config.port}`)
// })

worldbankCSV.worldbankDownloadCSV("http://api.worldbank.org/v2/en/indicator/EN.ATM.CO2E.KT?downloadformat=csv", "emissions.zip")
worldbankCSV.worldbankDownloadCSV("http://api.worldbank.org/v2/en/indicator/SP.POP.TOTL?downloadformat=csv", "populations.zip")

worldbankCSV.worldbankExtractZip("emissions")
worldbankCSV.worldbankExtractZip("populations")


module.exports = {
  app, server
}