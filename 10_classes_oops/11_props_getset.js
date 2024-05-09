/*/   old way of using getter and setter
/----------------------------------------
|property-based syntax or function based |
-----------------------------------------
*/
//function is function or object itself
function User(email, password){
    this._email = email;
    this._password = password

    //defineProperty use as set and get
//syntax-v
    // Object.defineProperty(this, 'variable' , {object(multiple functions)})
    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const chai = new User("himanshi@gmail.com", "abcd")
console.log(chai.email);
console.log(chai.password);

