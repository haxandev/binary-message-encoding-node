const express = require('express');
const router = require('./src/routes/index');
const bodyParser = require('body-parser');
const errorHandler = require('./src/utils/errorHandler');

const app = express();

app.use(express.json({limit: '256kb'}));
app.use(express.urlencoded({limit: '256kb', extended: true }));
app.use(
    bodyParser.raw({ limit: '256kb', type: ['image/*'] })
);


app.use(router);

app.use(errorHandler)

module.exports = app;