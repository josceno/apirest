
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

  /*transport.use('compile', hbs({                                //that structure not work and i dont know why 
      viewEngine: 'handlebars',
      viewPath: path.resolve('./resource/mail/ '),
      extName: '.html',

  }))*/
  transport.use('compile', hbs({
    viewEngine: {
      partialsDir: path.resolve('./resource/mail/')
    },
    viewPath: path.resolve('./resource/mail/'),
    extName: '.html',
  }));


  module.exports = transport