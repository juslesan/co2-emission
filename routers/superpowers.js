const express = require('express')
const superpowersRouter = express.Router()
const worldbank = require('./../external_apis/worldbank')
const csvReader = require('./../external_apis/csvReader')
const xml = require('xml');
const jsonParser = require('./../utils/jsonParser')

// Get router for superpower data
superpowersRouter.get('/', async (req, res) => {
    const populations = await csvReader.readCSV('./external_apis/data/populations.csv')

    
    const indexes = jsonParser.jsonParseSuperpowers(populations)
    // console.log(indexes)

    const emissions = await csvReader.readCSV('./external_apis/data/emissions.csv')
    const infoJson = []

    for (let i = 0; i < indexes.length; i++) {
        // console.log(i)
        infoJson.push({
            name: populations[indexes[i]]["Data Source"], // Find the name of the country
            info: jsonParser.jsonYears(populations[indexes[i]], emissions[indexes[i]]) // Find emission data for the country
        })
    }

    res.setHeader('Content-Type', 'application/json');
    // console.log(infoJson)
    res.send(infoJson)
    }
)



module.exports = superpowersRouter