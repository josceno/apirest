
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
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve('./ApiRestS/resources/mail/')
    },
    viewPath: path.resolve('./ApiRestS/resources/mail/'),
    extName: '.html',
  }));
  module.exports = transport