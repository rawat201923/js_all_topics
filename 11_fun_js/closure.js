/*  Closure 


a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created 
every time a function is created, at function creation time.
*/

///////////////Lexical scoping concept
// function outer(){
//     let username = "himanshi"
//     function inner(){
//         console.log("inner", username);
//     }
//     function innerTwo(){
//         console.log("innertwo", username);

//     }
//     inner()
//     innerTwo()
// }
// outer()
// // console.log("outer : " ,username)  //not access outside the function


//////////////closure concept
///// it returns complete lexical scope

function makeFunc(){
    const name = "Mozilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();