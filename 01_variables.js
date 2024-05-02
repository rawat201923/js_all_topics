console.log("himanshi");

//1......variables///////////////////////////////////////////////////
const accountId = 132456 //constant  variable, cannot be changed after execution
let secretKey = "secretkey"; //variable that can be modified during the program's execution
var firstName; //can be reassigned but not recommended because it is a global scope variable
firstName = "Himanshu" //global scope variable
lastName = "Sharma" //undefined variable will throw an error

let countState = ""; //o/p : undefined
console.log(accountId);
console.table([accountId, secretKey, firstName, lastName, countState]);

/* 
Cont and Let are used to declare variables with block scoping instead of function scoping like Var
Let is used when we want to limit the scope of a variable within a specific block only
*/