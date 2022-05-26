const asyncHandler = require('express-async-handler')
const mailTransport = require('../services/mailTransport')
const mailBuilder = require('../services/mailBuilder')
const CryptoJS = require('crypto-js')

const sendMail = asyncHandler(async (req, res) => {
  const data = req.body
  const hashed = CryptoJS.AES.decrypt(data.transport_key, process.env.EMAIL_SEND_SEC)

  if (hashed.toString(CryptoJS.enc.Utf8) === process.env.EMAIL_SEND_PASS) {
    await mailTransport.sendMail(mailBuilder.default(data))
    res.status(200).json({
      status: 200,
      message: "Successful mail transport."
    })
  } else {
    res.status(403).json({
      status: 403,
      message: "Unauthorized request"
    })
  }
})

module.exports = {
  sendMail
}
