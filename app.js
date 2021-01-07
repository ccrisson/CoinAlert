const express = require('express');
//const bodyParser = require('body-parser');

const app = express();

app.use('/', (req, res, next) => {
    console.log("hello")
})

module.exports = app; 