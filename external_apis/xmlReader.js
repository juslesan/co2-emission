const fs = require('mz/fs');
const xml2js = require('xml2js');
// let res = ''

const readFile = async (path) => {

        try {
          const file = await fs.readFile(path);
          const res = await parseXML(file)
          return res
        }
        catch (err) { console.error( err ) }
}

const parseXML = async (data) => {

    var parser = new xml2js.Parser();
    let res
    await parser.parseString(data, async function (err, result) {
        res = await JSON.stringify(result.Root.data)
        // res = (result.Root.data)

    })
    // console.log(res)

    return res
}

const readXML = async (path) => {
    
    let file = await readFile(path)
    // console.log('completed ' + file)
    return file
}

module.exports = {
    readXML
}

