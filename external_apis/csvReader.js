const csv=require('csvtojson')

const readCSV = async(path) => {
    const json = await csv().fromFile(path);
    // console.log(json)
    return json
}
module.exports = {
    readCSV
}

