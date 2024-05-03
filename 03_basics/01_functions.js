//functions

//function defination
function sayMyName(){
    console.log("himanshi")
}

// sayMyName()    //function reference

// function add_two_num(num1 , num2){
//     console.log(num1 + num2);

// }

// add_two_num(3,"4")
// add_two_num(3,null)
// add_two_num(3,4)


function add_two_num(num1 , num2){
    // let result = num1 + num2;
   
    // return result;    
    //after return nothing will work

    return num1+num2 ;
  

}
const result = add_two_num(3, 7);
// console.log("Result" , result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in` 
}

// console.log(loginUserMessage("himanshi"))
// console.log(loginUserMessage())


/********function with objects array ***********************/
//(..num1) ******/rest and spread
function calculateCartPrice(val1,val2, ...num1){  //HERE IT IS CALLED REST
    return num1;
}

// console.log(calculateCartPrice(200,300,400,500,600,700))

const user = {
    username: "hitesh",
    price:199

}

function handleObjects(anyObject){
    console.log(`Username is ${anyObject.username} and 
    price is ${anyObject.price}`)
}

// handleObjects(user)
handleObjects({
    username: "sam",
    price:399
})

const myNewArray = [200,400,200, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([300,200,500,700,800]))

