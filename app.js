const express = require('express');
const router = require('./src/routes/index');
const bodyParser = require('body-parser');
const errorHandler = require('./src/utils/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    bodyParser.raw({ limit: '50mb', type: ['image/*'] })
);


app.use(router);

app.use(errorHandler)

module.exports = app;