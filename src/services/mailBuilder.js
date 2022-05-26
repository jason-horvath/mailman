const mailBuilder = {
  default: (data) => {
    return {
      from: data.email,
      to: process.env.EMAIL_SEND_ADDR,
      subject: ``,
      html: ``
    }
  }

}

module.exports = mailBuilder
