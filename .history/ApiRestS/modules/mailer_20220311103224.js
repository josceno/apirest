const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "73e67adf23efa9",
      pass: "1f461f8d994b35"
    }
  });

  module.exports = transport