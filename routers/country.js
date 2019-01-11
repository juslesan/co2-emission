const express = require('express')
const countryRouter = express.Router()
const worldbank = require('./../external_apis/worldbank')
const csvReader = require('./../external_apis/csvReader')
const xml = require('xml');
const jsonParser = require('./../utils/jsonParser')

countryRouter.get('/:name', async (req, res) => {
    const populations = await csvReader.readCSV('./external_apis/API_EN.ATM.CO2E.KT_DS2_en_csv_v2_10224872.csv')
    const index = jsonParser.jsonParseName(populations, req.params.name)
    // console.log(populations[2])
    console.log(index)

    if (index > -1) {
        const emissions = await csvReader.readCSV('./external_apis/API_SP.POP.TOTL_DS2_en_csv_v2_10224786.csv')
        const infoJson = {
            name: populations[index]["Data Source"],
            populations: populations[index],
            emissions: emissions[index]
        }
        res.setHeader('Content-Type', 'application/json');

        res.send(infoJson)
    }
    else {
        res.setHeader('Content-Type', 'application/json');
        res.send({error: 'Not Found'})
    }
})



module.exports = countryRouter

