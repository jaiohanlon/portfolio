const path = require('path');
const webpack = require('webpack');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const compiler = webpack(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}));
app.use(hotMiddleware(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.post('/send-contact-email', (req, res) => {
  const transporter = nodemailer.createTransport({
      service: 'Zoho',
      auth: {
          user: '',
          pass: ''
      }
  });

  const mailOptions = {
      from: '"jaiohanlon.com" <jai.ohanlon@fjcreative.uk>',
      to: 'jai.ohanlon@fjcreative.uk',
      subject: 'Website enquiry from jaiohanlon.com',
      text: `Name: ${req.body.name} \n Email: ${req.body.email} \n Phone: ${req.body.phone} \n Message: ${req.body.message}`,
      html: `<b>Name:</b> ${req.body.name} <br/> <b>Email:</b> ${req.body.email} <br/> <b>Phone:</b> ${req.body.phone} </br> <b>Message:</b> ${req.body.message}`
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);

      response.writeHead(200, {"Content-Type": "application/json"});
      var json = JSON.stringify({
        success: true,
      });
      response.end(json);

  });
})

app.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
