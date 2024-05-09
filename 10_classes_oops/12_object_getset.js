/*/  way of using getter and setter
/----------------------------------------
|object-based syntax or function based |
-----------------------------------------
*/
const User = {
    _email:'him@gmai.ai',    //_ underscore goes to private property
    _password: "abcd",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value

    }
}

const tea = Object.create(User)
console.log(tea.email);