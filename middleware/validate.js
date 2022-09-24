const yup = require("yup");

// Create
const userCreateSchema = yup.object({
    name: yup.string().trim().min(2).max(64).required(),
    surname: yup.string().trim().min(2).max(64).required(),
    isMail: yup.boolean.required(),
    age: yup.number().positive().integer().required()
});
module.exports.validateUserCreate = (req, res, next) => {
    const {body} = req;
    userCreateSchema.validate(body).then((validatedUser) => {
        req.body = validatedUser;
        next();
    }).catch((error) => {
        res.status(400).send(error);
    })
}

// Update
const userUpdateSchema = yup.object({
    surname: yup.string().trim().min(2).max(64),
    age: yup.number().positive().integer()
});
module.exports.validateUserUpdate = (req, res, next) => {
    const {body} = req;
    userUpdateSchema.validate(body).then((validatedUser) => {
        req.body = validatedUser;
        next();
    }).catch((error) => {
        res.status(400).send(error);
    })
}