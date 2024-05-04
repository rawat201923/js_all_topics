// truthy and falsy concept

const userEmail = []

if(userEmail){
    console.log("Got user email");

}else{
    console.log("dont have user email")
}

/*
falsy values

 false, 0, -0, BigInt 0n, "", null, undefined, NaN

 INSTEAD ALL VALUES ARE TRUTHY

TRUTHY VALUES
"0","false, " ", [],{}, function(){}

*/

if(userEmail.length === 0){
    // console.log("array is empty")
}

const emptyObj = {}
 if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")
 }

 /**********NUllish Coalescing Operator (??):null undefined */

 let val1;
 val1 = 5 ?? 10
 val1 = null ?? 10   //new operator
 val1 = undefined ?? 15
 console.log(val1);

 ///TERNIARY OPERATOR

 //CONSITION ? TRUE : FALSE

 const iceTeaPrice = 100
 iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")