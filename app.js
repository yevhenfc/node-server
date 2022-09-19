const express = require('express');
const app = express();

//db
const usersDB = [
    {
        id: 1,
        name: "Name1",
        surname: "Surname1",
        isMale: true,
        age: 1
    },
    {
        id: 2,
        name: "Name2",
        surname: "Surname2",
        isMale: false,
        age: 2
    },
    {
        id: 3,
        name: "Name3",
        surname: "Surname3",
        isMale: true,
        age: 3
    },
    {
        id: 4,
        name: "Name4",
        surname: "Surname4",
        isMale: false,
        age: 4
    }
];

class Users{
    constructor(users){
        this.users = [...users];
        this.count = users.length;
    }
    createUser(user){}
    
    getUserById(id){}
    
    getllUsers(){return [...this.users]}
    
    updateUser(id, newInfo){}
    
    deleteUser(id){}
}
const usersInstance = new Users(usersDB);


//CRUD/controller for users
//get all users
app.get("/users", (req, res) => {
    const data = usersInstance.getllUsers();
    res.status(200).send(data);
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