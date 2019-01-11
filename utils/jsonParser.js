

const jsonParseName = (json, name) => {
    let count = Object.keys(json).length;
    
    for (let i = 0; i < count; i++) {
        if (json[i]['Data Source'] == name) {
            console.log(i)
            return i;
        }
    }
    return -1;
}

module.exports = {
    jsonParseName
  }