
const path = require('path')
const nodemailer = require('nodemailer')
//can use js viriable and names in html
const hbs = require('nodemailer-express-handlebars')

const {host, port, user, pass} = require('../config/mail.json')
const transport = nodemailer.createTransport({
    host,
    port,
    auth: {user, pass},
      
  });

  transport.use('compile', hbs({
      viewEngine: 'handlebars',
      viewPath: path.resolve('./resource/mail/auth ')

  }))

  module.exports = transport