
const populations = 'http://api.worldbank.org/v2/countries/all/indicators/SP.POP.TOTL?format=json'
const pollutions = 'http://api.worldbank.org/v2/en/indicator/EN.ATM.CO2E.KT?format=json'
const API = 'http://api.worldbank.org/v2/en/indicator/EN.ATM.CO2E.KT?downloadformat=csv'

module.exports = {
    populations,
    pollutions,
    API
}
