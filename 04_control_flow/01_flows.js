//******** */ control flows*********
/*/if condition

=  assignment Symbol
== comparison symbole
all comparison operators ==, >,<, >=, <=, !=, ===
*/
const isUserloggedIn = true

if(!isUserloggedIn){

// console.log("executed")

}

if(2 !=  "2"){

    // console.log("executed")
    
    }

//if- else
const temperature = 41

    if(temperature === 41){
    
    // console.log("less than 50")
    
    }else{
        // console.log("temperature is more than 50")
    }
    

    const score = 200
    if(score>100){
        let power = "fly"
        // console.log(`User power : ${power}`)

    }
    // console.log(`User power : ${power}`)

// shorthand notation

const bal=1000
// if (bal>500) console.log("test"); //it is nots a good practice


//if-else nested/////////
if (bal<500){
    // console.log("less than")
} else if(bal <900){
    // console.log("less than 1200")
} else{
    // console.log("less than 1200")
}



const userLoggedIn = true
const debitCard =true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//&& it check both condition
// || it check any condn be true
if(userLoggedIn && debitCard){
    // console.log("allow to purchase courses")
}
else{
    // console.log("please logged in first")
}

if (loggedInFromGoogle || loggedInFromEmail){
    // console.log("User Logged in");
}


//*******swtich case******************/
/*  BASIC SYNTAX

switch (key){
    case value:
        break;
    default:
        break;
}

*/

const month = 3
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("febuary")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;

    default:
        break;  //
}


const day = "tue"
switch (day) {
    case "mon":
        console.log("monday")
        break;
    case "tue":
        console.log("tuesday")
        break;
    case "wed":
        console.log("wednesday")
        break;
    case "thur":
        console.log("thursday")
        break;

    default:
        break;  //
}


