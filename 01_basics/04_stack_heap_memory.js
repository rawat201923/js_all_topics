// stack (all primitive), *****************/

let myName = "himanshi";    
let anotherName = myName;
anotherName = "chai Aur code";

console.log(myName)  //himanshi
console.log(anotherName) //chai Aur code

//becoz it create a copy variable

// heap (all  non- primitive)******************/
let userOne = {
    email:"user@gmail.com",
    upi:"user@paytm"
}

let userTwo = userOne
console.log(userOne.email)  //user@gmail.com
console.log(userTwo.email)  //user@gmail.com

//becoz it create refrences

