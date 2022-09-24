const yup = require("yup");

module.exports.userCreateSchema = yup.object({
    name: yup.string().trim().min(2).max(64).required(),
    surname: yup.string().trim().min(2).max(64).required(),
    isMail: yup.boolean().required(),
    age: yup.number().positive().integer().required()
});

module.exports.userUpdateSchema = yup.object({
    surname: yup.string().trim().min(2).max(64),
    age: yup.number().positive().integer()
});