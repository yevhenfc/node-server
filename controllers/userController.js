const {Users} = require('./../models');
//crud
module.exports.getAllUsers = (req, res) => {
    const data = Users.getAllUsers();
    res.status(200).send(data);
};
module.exports.getUser = (req, res) => {
    const {id} = req.params;
    const foundUser = Users.getUserById(id);
    if(foundUser){ 
        res.status(200).send(foundUser); 
        return; 
    }
    res.status(404).send(`User #${id} not found in data base`); 
};

module.exports.createNewUser = (req, res) => {
    const { body } = req;
    const newUser = Users.createUser(body);
    res.status(201).send(newUser);
};

module.exports.updateUser = (req, res) => {
    //const {id} = req.params;
    //const {body} = req;
    const {
        body,
        params: {id}
    } = req;
    const foundUser = Users.updateUser(id, body);
    if(foundUser){ 
        res.status(200).send(foundUser); 
        return; 
    }
    res.status(404).send(`User #${id} not found in data base`); 
};

module.exports.deleteUser = (req, res) => {
    const {id} = req.params;
    const foundUser = Users.deleteUser(id);
    if(foundUser){ 
        res.status(200).send(foundUser); 
        return; 
    }
    res.status(404).send(`User #${id} not found in data base`); 
};