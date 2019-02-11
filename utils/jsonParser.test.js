const jsonParser = require('./jsonParser.js')

const mockJson = [
    {
        "Data Source": "Finland",
    },
    {
        "Data Source": "Russian federation",
    },
    {
        "Data Source": "China"
    },
    {
        "Data Source": "United States"
    },
    {
        "Data Source": "Germany"
    },
    {
        "Data Source": "India"
    }
]

test('not found name returns -1', () => {
    expect(jsonParser.jsonParseName(mockJson, 'sweden')).toEqual(-1)
})

test('Found name returns ', () => {
    expect(jsonParser.jsonParseName(mockJson, 'finland')).toEqual(0)
})

test('superpowers return list of indexes', () => {
    expect(jsonParser.jsonParseSuperpowers(mockJson).length).toEqual(5)
})
