const express = require('express');
//const bodyParser = require('body-parser');
//https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT
const axios = require('axios');
const nodemailer = require('nodemailer');
const app = express();

const emailconfig = require('./emailconfig');



app.use('/', (req, res, next) => {
    axios.get('https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT')
        .then(function (response) {
            console.log(response.data.price);

            if(response.data.price < 37200){

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
    console.log("did it work?")
})

module.exports = app;
