const express = require('express')
const pollutionsRouter = express.Router()
const worldbank = require('./../external_apis/worldbank')
const csvReader = require('./../external_apis/csvReader')
const xml = require('xml');


pollutionsRouter.get('/pollutions', async (req, res) => {
    const info = await csvReader.readCSV('./external_apis/API_EN.ATM.CO2E.KT_DS2_en_csv_v2_10224872.csv')
    // console.log(info)
    
    // res.type('application/xml');

    // res.set('Content-Type', 'text/xml');
    // res.send(xml(info));

    res.setHeader('Content-Type', 'application/json');
    res.send(info)
})



module.exports = pollutionsRouter

