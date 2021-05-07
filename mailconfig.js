const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "gogoume.com@gmail.com",
    pass: "gogoume@123"
  }
});

module.exports = transporter;