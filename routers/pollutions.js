const express = require('express')
const pollutionsRouter = express.Router()
const worldbank = require('./../external_apis/worldbank')
const csvReader = require('./../external_apis/csvReader')
const xml = require('xml');

// get router for all pollutions
pollutionsRouter.get('/pollutions', async (req, res) => {
    const info = await csvReader.readCSV('./external_apis/data/emissions.csv')

    res.setHeader('Content-Type', 'application/json');
    res.send(info)
})



module.exports = pollutionsRouter

