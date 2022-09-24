const express = require('express');
const {userController} = require('./controllers');
const {validate, errorHandlers} = require('./middleware');
const app = express();

//json data
app.use(express.json());

//errors
app.use(errorHandlers.internalServerEH,errorHandlers.validationEH)

// users
app.get   ("/users",     userController.getAllUsers);
app.get   ("/users/:id", userController.getUser);
app.post  ("/users",     validate.validateUserCreate, userController.createNewUser);
app.patch ("/users/:id", validate.validateUserUpdate, userController.updateUser);
app.delete("/users/:id", userController.deleteUser);

module.exports = app;