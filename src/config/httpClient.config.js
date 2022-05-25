const httpClientConfig = {
  whitelist: process.env.DOMAIN_WHITELIST_CLIENTS.split(',')
}

module.exports = httpClientConfig
