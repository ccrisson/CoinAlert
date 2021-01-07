const express = require('express');
//const bodyParser = require('body-parser');
//https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT

const app = express();

app.use('/', (req, res, next) => {

    console.log("hello")
})

module.exports = app;
