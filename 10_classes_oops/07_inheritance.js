class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`User is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)    //super class automatically take this keyword behid the sceneb
        this.email= email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "1234")

chai.addCourse()

const masalachai = new User("masalachai");

// masalachai.addCourse()    //it has not access
masalachai.logMe()

console.log(chai instanceof Teacher);   //chai is a instance of teacher