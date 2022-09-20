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
    createUser(user){
        this.count++;
        this.users.push({...user, id: this.count});
        return this.users[this.count - 1];
    }
    
    getUserById(id){
        const foundIndex = this.users.findIndex((u) => u.id === Number(id));
        return this.users[foundIndex];
    }
    
    getllUsers(){return [...this.users]}
    
    updateUser(id, newInfo){
        const foundIndex = this.users.findIndex((u) = u.id === Number(id));
        this.users[foundIndex] = {
            ...this.users[foundIndex],
            ...newInfo,
        };
        return this.users[foundIndex]

    }
    
    deleteUser(id){
        const foundIndex = this.users.findIndex((u) = u.id === Number(id));
        this.users.splice(foundIndex, 1);
        this.count--;

    }
}
const usersInstance = new Users(usersDB);


//CRUD/controller for users
//get all users
app.get("/users", (req, res) => {
    const data = usersInstance.getllUsers();
    res.status(200).send(data);
});

app.get("/users/:id", (req, res) => {
    const {id} = req.params;
    const foundUser = usersInstance.getUserById(id);
    res.status(200).send(foundUser);
});

app.post("/users", (req, res) => {
    const {body} = req;
    const newUser = usersInstance.createUser(body);
    res.status(201).send(foundUser);
});

app.patch("/users/:id", (req, res) => {
    const {id} = req.params;
    const {body} = req;
    const foundUser = usersInstance.updateUser(id, body);
    res.status(200).send(foundUser);
});

app.delete("/users/:id", (req, res) => {
    const {id} = req.params;
    const foundUser = usersInstance.deleteUser(id);
    res.status(200).send(foundUser);
});



module.exports = app;