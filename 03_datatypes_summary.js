// premitive datatypes
// 7 types : string,number,boolean, null,undefined,symbol,bigint

const score = 100  //number
 const id = Symbol('123')
 const anotherId = Symbol('123')

//  console.log(id===anotherId)  //o/p : false becoz symbole always unique value


 const bigInt = 213456789999834567879999999999n
//  console.log(bigInt)
//  console.log(typeof bigInt)


// reference (non-primitive)
//array , objects, functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age:22,

}

const myfunction = function(){
    console.log("hello world");

}

console.log(typeof myfunction)
console.log(typeof myObj)
console.log(typeof heros)