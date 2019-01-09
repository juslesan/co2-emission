const express = require('express')
const pollutionsRouter = express.Router()
const worldbank = require('./../external_apis/worldbank')
const xmlReader = require('./../external_apis/xmlReader')
const xml = require('xml');


pollutionsRouter.get('/pollutions', async (req, res) => {
    const info = await xmlReader.readXML('./external_apis/API_EN.ATM.CO2E.KT_DS2_en_xml_v2_10227343.xml')
    // console.log(info)

    res.type('application/xml');

    res.set('Content-Type', 'text/xml');
    res.send(xml(info));
})



module.exports = pollutionsRouter

