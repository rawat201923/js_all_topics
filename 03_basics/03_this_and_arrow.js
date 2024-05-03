// this and arrow function

const user = {
    username: "hiamnshi",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);  //this refer to current context
   
    }     
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  //in global this this object is empty
// window is global object


// function chai(){
//     let username= "himanshi"
//     console.log(this)  //in local scope it shows many objects
// }

//**************arrow function**********////////

const chai = () => {   
    let username= "himanshi"
    console.log(this)  //in local scope it shows many objects
}

// chai()

// const addtTwo = (num1,num2) => {  //basic arrow function
//     return num1+num2       //in curly braces return required

// }

// const addtTwo = (num1,num2) => num1+num2  //implicit return

const addtTwo = (num1,num2) => (num1+num2) //implicit not required return keyword
console.log(addtTwo(3,4))


