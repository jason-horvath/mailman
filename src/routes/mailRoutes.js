const express = require('express')
const mailRouter = express.Router()
const {
  sendMail
} = require('../controllers/mailController')

mailRouter.route('/send').post(sendMail)

module.exports = mailRouter
