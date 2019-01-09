const axios = require('axios');

const urls = require('./urls')

const getPollutions = () => {
    return axios.get(urls.populations)
    
}

const getPopulations = () => {
    return axios.get(urls.pollutions)
    
}

module.exports = {
    getPopulations,
    getPollutions
}
