

const jsonParseName = (json, name) => {
    let count = Object.keys(json).length;
    
    for (let i = 0; i < count; i++) {
        if (json[i]['Data Source'] == name) {
            // console.log(i)
            return i;
        }
    }
    return -1;
}


const jsonYears = (populations, emissions) => {
    let count = Object.keys(populations).length;

    // console.log(Object.values(populations))
    const countryStats = []
    for (let i = 4; i < count; i++) {
        countryStats.push({
            population: Object.values(populations)[i],
            emissions: Object.values(emissions)[i]
        })
    }
    return countryStats
} 

module.exports = {
    jsonParseName,
    jsonYears
    
  }