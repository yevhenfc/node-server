const {serCreateSchema, userUpdateSchema} = require('../utils/validationSchemas');

module.exports.validateUserCreate = async (req, res, next) => {
    const {body} = req;
    try {
        const validatedUser = await userCreateSchema.validate(body);        
        req.body = validatedUser;
        next();
    }
    catch(error){res.status(400).send(error)}
}

module.exports.validateUserUpdate = async (req, res, next) => {
    const {body} = req;
    try {
        const validatedUser = await userUpdateSchema.validate(body);        
        req.body = validatedUser;
        next();
    }
    catch(error){res.status(400).send(error)}
 }