const nodemailer = require('nodemailer')

const mailTransport = {
    sendMail: async (mailOptions, res) => {
      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_SEND_ADDR,
            pass: process.env.EMAIL_SEND_PASS
        }
      })
      
      transport.sendMail(mailOptions, function(error, info) {
        if(error) {
          res.status(500).json({ status: 500, message: "Failed mail transport."})
        }
      })
    } 
}

module.exports = mailTransport
