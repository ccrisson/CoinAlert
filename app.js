const express = require('express');
//const bodyParser = require('body-parser');
//https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT
const axios = require('axios');
const nodemailer = require('nodemailer');
const app = express();
const cron = require('node-cron');
const emailconfig = require('./emailconfig');

cron.schedule('*/5 * * * *', function () {
  axios.get('https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT')
      .then(function (response) {
          console.log(response.data.price);

          if(response.data.price < 38200){  //change back to less than

            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: emailconfig.user,
                pass: emailconfig.pw
              }
            });

            const mailOptions = {
              from: emailconfig.user,
              to: emailconfig.number,
              subject: 'RHED ALERT!!! TONYS HOME',
              text: response.data.price
            };

            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });

          }

      })

});




module.exports = app;
