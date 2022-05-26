const asyncHandler = require('express-async-handler')
const httpClientConfig = require('../config/httpClient.config')

const whiteListProtector = asyncHandler(async (req, res, next) => {
  if (httpClientConfig.whitelist.includes(req.header('origin'))) {
    res.header('Acces-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  } else {
    res.status(403)
    throw new Error('Not authorized for this request.')
  }
})

module.exports = {
  whiteListProtector
}
