// let myName = "himanshi        "
// let mychannel = "chai   "

// console.log(myName.trim().length);


let myHero= ["thor","spiderman"]  //array

let heroPower = {                 //object
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower:function(){      //function inside object or method
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.himani = function(){
    console.log(`himanhsi is present on all objects
    `)
}        //through protoype it can acces all objects,array,string

Array.prototype.heyHimani = function(){
    console.log(`himanhsi say heelo`)
}

// heroPower.himani()      //
// myHero.himani()       
// myHero.heyHimani()        
// heroPower.heyHimani()  //has not power to acces object

//inheritance

const User = {
    name : "chai",
    email: "chai@gmail.com"
}
const Teacher = {
    nakeVideo: true
}
const TeachingSupport = {
    isAvailable: false
   
}
const TASupport = {
    makeAssignment : "js assignment",
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chaiaurcode        "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

