const {ValidationError} = require('yup');

module.exports.internalServerEH = (err, req, res, next) => {
    if(err instanceof ValidationError) res.status(500).send(err.errors);
    next(err);
}; //int server err

module.exports.validationEH = (err, req, res, next) => {
    if(err instanceof ValidationError) res.status(422).send(err.errors);
    next(err);
}; //unprocessable entity