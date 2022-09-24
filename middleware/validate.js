const {serCreateSchema, userUpdateSchema} = require('../utils/validationSchemas');

module.exports.validateUserCreate = (req, res, next) => {
    const {body} = req;
    userCreateSchema.validate(body).then((validatedUser) => {
        req.body = validatedUser;
        next();
    }).catch((error) => {
        res.status(400).send(error);
    })
}


module.exports.validateUserUpdate = (req, res, next) => {
    const {body} = req;
    userUpdateSchema.validate(body).then((validatedUser) => {
        req.body = validatedUser;
        next();
    }).catch((error) => {
        res.status(400).send(error);
    })
}