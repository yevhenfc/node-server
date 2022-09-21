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
        this.count = users.length; //users[users.length -1].id + 1
    }
    createUser(user){
        this.count++;
        this.users.push({...user, id: this.count});
        const newUser = this.users[this.count - 1];
        console.log('user=',user);
        console.log('newUser=',newUser);
        return newUser;
    }
    getUserById(id){
        const foundIndex = this.users.findIndex((u) => u.id === Number(id));
        return foundIndex === -1 ? null: this.users[foundIndex];
    }
    getAllUsers(){ 
        return [...this.users];
    }
    updateUser(id, newInfo){
        const foundIndex = this.users.findIndex((u) => u.id === Number(id));
        return foundIndex === -1 ? null: tthis.users[foundIndex] = {
            ...this.users[foundIndex],
            ...newInfo,
        };
    }
    deleteUser(id){
        const foundIndex = this.users.findIndex((u) => u.id === Number(id));
        this.count--;
        return foundIndex === -1 ? null: this.users.splice(foundIndex, 1);
    }
}

const usersInstance = new Users(usersDB);

module.exports = usersInstance;

