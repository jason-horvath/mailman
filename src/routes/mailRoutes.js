const express = require('express')
const mailRouter = express.Router()
const {
  sendMail
} = require('../controlers/mailController')

mailRouter.route('/send').post(sendMail)

module.exports = mailRouter
