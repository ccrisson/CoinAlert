const express = require('express');
//const bodyParser = require('body-parser');
//https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT
const axios = require('axios');

const app = express();

app.use('/', (req, res, next) => {
    axios.get('https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT')
        .then(function (response) {
            console.log(response.data.price);
        })
    console.log("did it work?")
})

module.exports = app;
