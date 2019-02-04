

const jsonParseName = (json, name) => {
    let count = Object.keys(json).length;
    
    for (let i = 0; i < count; i++) {
        if (json[i]['Data Source'].toUpperCase() === name.toUpperCase()) {
            // console.log(i)
            return i;
        }
    }
    return -1;
}

const jsonParseSuperpowers = (json) => {
    let count = Object.keys(json).length;
    let indexes = []
    for (let i = 0; i < count; i++) {
        if (json[i]['Data Source'].toUpperCase() === 'United States'.toUpperCase()) {
            indexes.push(i)
        }
        if (json[i]['Data Source'].toUpperCase() === 'India'.toUpperCase()) {
            indexes.push(i)
        }
        if (json[i]['Data Source'].toUpperCase() === 'Russian federation'.toUpperCase()) {
            indexes.push(i)
        }
        if (json[i]['Data Source'].toUpperCase() === 'China'.toUpperCase()) {
            indexes.push(i)
        }
        if (json[i]['Data Source'].toUpperCase() === 'Germany'.toUpperCase()) {
            indexes.push(i)
        }
    }
    return indexes;

}


const jsonYears = (populations, emissions) => {
    let count = Object.keys(populations).length;

    // console.log(Object.values(populations))
    const countryStats = []
    const popsYears = { name: "populations",
                        data: {}}
    const emisYears = { name: "emissions",
                        data: {}}
    for (let i = 4; i < count; i++) {
        const year = 1956 + i
        popsYears.data[year] = Object.values(populations)[i]
        emisYears.data[year] = Object.values(emissions)[i]
        }
        
        countryStats.push(popsYears)
        countryStats.push(emisYears)
    
    return countryStats
} 

module.exports = {
    jsonParseName,
    jsonYears,
    jsonParseSuperpowers
    
  }