const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    console.log('request is:', req);
    console.log('response is:', res);
    res.status(200).send();
});

//CRUD/controller for users
app.get("/users", (req, res) => {

});
app.get("/users/1", (req, res) => {

});
app.post("/users", (req, res) => {

});
app.patch("/users/1", (req, res) => {

});
app.delete("/users/1", (req, res) => {

});



module.exports = app;