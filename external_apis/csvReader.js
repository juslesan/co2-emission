const csv=require('csvtojson')

// Use the csvthejson library to return the csv data in json form
const readCSV = async(path) => {
    const json = await csv().fromFile(path);
    return json
}
module.exports = {
    readCSV
}

