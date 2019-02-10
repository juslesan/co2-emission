if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  
  let port = '3003'
  
  if (process.env.NODE_ENV === 'test') {
    port = '3004'
  }
  
  module.exports = {
    port
  }