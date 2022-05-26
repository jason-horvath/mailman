const cors = require('cors')
const httpClientConfig = require('../config/httpClient.config')
const { corsEnabled, whitelist } = httpClientConfig
const corsProtector = (req, callback) => {
  let corsOptions = {
    origin: false
  }
  console.log(corsEnabled)
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions.origin = true
  } else if (corsEnabled) {
    callback(new Error('Not allowed by CORS'))
  }
  callback(null, corsOptions)
}

module.exports = {
  corsProtector
}
