const express = require('express');
const {validate, errorHandlers} = require('./middleware');
const router = require('./router');

const app = express();

//json data
app.use(express.json());

//errors
app.use(errorHandlers.internalServerEH,errorHandlers.validationEH)

app.use('/api, router');


module.exports = app;