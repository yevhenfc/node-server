const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('request: ', req)
    res.status(200).end();
});

app.post('/users', (req, res) => {
    const {body} = req;
    // const newUser = 
    res.status(201).send(body);
});

app.get('/users/id', (req, res) => {
    //
    res.status(200).send();
});


// app.get('/users/id', (req, res) => {});
// app.post('/users/', (req, res) => {});
// app.patch('/users/id', (req, res) => {});
// app.delete('/users/id', (req, res) => {});

module.exports = app;