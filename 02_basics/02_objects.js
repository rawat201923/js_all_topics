////// singleton
// object.create  using to create object in constructors
//object literals
 const mysyb = Symbol("key1")

const jsuser = {
    name : "himani",
    "full name" : "himani rawat",
[mysyb] : "key1", // symbol delaration
    age:20,
    location:"jaipur",
    email : "himansi@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}


// console.log(jsuser.email)          // first way to access
// console.log(jsuser["email"])        //second way to access
// console.log(jsuser["full name"])          // first way to access
// console.log(jsuser[mysyb])  

jsuser.email = "himi@gmail.com";
// Object.freeze(jsuser)
jsuser.email = "himani@google.com"
// console.log(jsuser)

jsuser.greeting = function(){
    console.log("hello js user");
}
jsuser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
// console.log(jsuser.greeting)
// console.log(jsuser.greeting())
// console.log(jsuser.greetingTwo())


/********objects part 2*********************/
// objects declared by constructors or singleton

// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123jdjsd"
tinderUser.name="sammy"
tinderUser.isLoggedIn =  false

// console.log(tinderUser)

const regularUser = {
    email:"himni@gmail.com",
    fullname: {
        userfullname:{
            firstname: "hiamni",
            lastname:"rawat"

        }
    }

}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2) //Object.assign(target,source)

const obj3= {...obj1, ...obj2} //mosly used way
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


///////////*************next part **********/
//de-structure of objects

const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "himanshi"
}

//course.courseInstructor

const {courseInstructor : instructor} = course
const {coursename} = course


// console.table([courseInstructor,coursename])
console.log(instructor)

/////////*********api topic****************/////////////
// {
//     "name": "himani",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

// **********sample api :  "https://randomuser.me/api/"************///////////