const httpClientConfig = {
  corsEnabled: process.env.NODE_ENV !== 'development',
  whitelist: process.env.DOMAIN_WHITELIST_CLIENTS.split(',')
}

module.exports = httpClientConfig
