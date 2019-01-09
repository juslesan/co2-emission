const express = require('express')
const populationsRouter = express.Router()
const worldbank = require('./../external_apis/worldbank')
const xmlReader = require('./../external_apis/xmlReader')
const xml = require('xml');

populationsRouter.get('/populations', async (req, res) => {
    const info = await xmlReader.readXML('./external_apis/API_SP.POP.TOTL_DS2_en_xml_v2_10224853.xml')
    // console.log(info)

    res.type('application/xml');

    res.set('Content-Type', 'text/xml');
    res.send(xml(info));
})

module.exports = populationsRouter
