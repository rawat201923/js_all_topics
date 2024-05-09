// THIS JAVASCRIPT IS AFTER ES6

//using class and constructor
class User{
    constructor(username,email,password){
        this.username = username; //set in variable
        this.email = email;
        this.password = password;

    }

    encryptPassword(){              //method or prefined function
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.con", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

//behind the scenece using function

function User2(username, email, password){
    this.username = username;
        this.email = email;
        this.password = password;
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.con", "12345");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());


