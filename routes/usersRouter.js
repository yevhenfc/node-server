const {userController} = require('../controllers');
const {validate, errorHandlers} = require('../middleware');
const {Router} = require('express');
const usersRouter = Router();

usersRouter.get   ("/",     userController.getAllUsers);
usersRouter.get   ("/:id", userController.getUser);
usersRouter.post  ("/",     validate.validateUserCreate, userController.createNewUser);
usersRouter.patch ("/:id", validate.validateUserUpdate, userController.updateUser);
usersRouter.delete("/:id", userController.deleteUser);

module.exports = usersRouter;
