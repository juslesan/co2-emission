const express = require('express')
const countryRouter = express.Router()
const worldbank = require('./../external_apis/worldbank')
const csvReader = require('./../external_apis/csvReader')
const xml = require('xml');
const jsonParser = require('./../utils/jsonParser')

countryRouter.get('/:name', async (req, res) => {
    const populations = await csvReader.readCSV('./external_apis/data/populations.csv')

    const index = jsonParser.jsonParseName(populations, req.params.name)


    if (index > -1) {
        const emissions = await csvReader.readCSV('./external_apis/data/emissions.csv')
        const infoJson = {
            name: populations[index]["Data Source"],
            info: jsonParser.jsonYears(populations[index], emissions[index])
        }
        res.setHeader('Content-Type', 'application/json');
        // console.log(infoJson)
        res.send(infoJson)
    }
    else {
        res.setHeader('Content-Type', 'application/json');
        res.send({error: 'Not Found'})
    }
})



module.exports = countryRouter

