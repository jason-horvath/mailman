const standard = require('../templates/mail/standard')
const mailBuilder = {
  standard: (data) => {
    return {
      from: data.email,
      to: process.env.EMAIL_SEND_ADDR,
      subject: data.subject,
      html: standard(data)
    }
  }

}

module.exports = mailBuilder
