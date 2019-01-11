const express = require('express')
const populationsRouter = express.Router()
const worldbank = require('./../external_apis/worldbank')
const csvReader = require('./../external_apis/xmlReader')
const xml = require('xml');

populationsRouter.get('/populations', async (req, res) => {
    const info = await csvReader.readCSV('./external_apis/API_SP.POP.TOTL_DS2_en_csv_v2_10224786.csv')
    // console.log(info)

    // res.type('application/xml');

    // res.set('Content-Type', 'text/xml');
    // res.send(xml(info));
    res.setHeader('Content-Type', 'application/json');
    res.send(info)
})

module.exports = populationsRouter