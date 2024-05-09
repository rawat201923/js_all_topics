/*

getter and setters use for encypted the password and dont want to give password

get and set use together
--------------------
|class-based syntax |
---------------------
*/


class User{   //declaration of class
    constructor(email, password){
        this.email=email;
        this.password=password

    }



       //restrict the email

       get email(){
        return this._email.toUpperCase()
       }

       set email(value){
        this._email = value;
       }
    //restrict the passwords

    get password(){
        return `${this._password}himanshi`
    }

    // get and set work together
    set password(value){
        this._password = value;   //to set paasword create newpassword using _
    }
}

const himanshi = new User("himanshi@gmail.com", "abcd")
console.log(himanshi.password);
console.log(himanshi.email);