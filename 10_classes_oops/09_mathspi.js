const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter)

//////hard coded properties define for this pi

// console.log(Math.PI) 
// Math.PI = 5
// console.log(Math.PI)          //not overwrite becoz it is constant

const chai ={
    name: "ginger chai",
    price: "250",
    available: true,

    orderChai : function(){
        console.log(`chai nahi bani`);
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable : false,
    enumerable:false,
    // configurable:false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key,value] of Object.entries(chai)) {
    if(typeof value !=='function'){
        console.log(`${key} :${value}`) 
    }
   
}