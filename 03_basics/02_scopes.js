
//      {}  it is a scope . global and local scope 

// var c=300

let a=200

if(true){
    let a = 10    //global scope
    const b = 20  //local scope
    var c = 30      //local scope
    // console.log("inner", a);
}
// console.log(a);
// console.log(b)
// console.log(c)


//**************Scope level and mini hoisting **********/

function one(){
    const username="himansi"

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); 

    two()
}
// one()  //parent function can excess child function 


if(true){
    const username="hitesh"
    if(username == "hitesh"){
        const website = "youtube" //const is function or block scope
        // console.log(username+ website);

    }
    // console.log(website)
}
// console.log(username)

//+++++++++++++++++++++interesting+++++++++++++++/


function addone(num){
    return num+1;
}

addone(5)

const addtwo = function(num){               //this way called expression
    return num+2
}

console.log(addtwo(5))

