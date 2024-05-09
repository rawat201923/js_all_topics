// statice prop(react) properties

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);

    }

    static createId(){          //static return the acces of properties
        return `123`
    }
}

const himani = new User("himanshi")

console.log(himani.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email   

    }
}

const iphone = new Teacher("iphone", " iPhone@gmail.com")
console.log(iphone.createId())