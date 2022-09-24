const {Router} = require('express');
const router = Router();
const usersRouter = require('./routes/usersRouter');
//users
router.use('/users', usersRouter);

//tasks
router.use('/tasks', tasksRouter);

module.exports = router;