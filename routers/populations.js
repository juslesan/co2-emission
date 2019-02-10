const express = require('express')
const populationsRouter = express.Router()
const worldbank = require('./../external_apis/worldbank')
const xml = require('xml');

populationsRouter.get('/populations', async (req, res) => {
    const info = await csvReader.readCSV('./external_apis/data/populations.csv')

    res.send(info)
})

module.exports = populationsRouter
