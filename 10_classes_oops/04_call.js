/****
 call, bind , apply  and this

 call


 */

 function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called")
 }

 function createUser(username, email, password){
    SetUsername.call(this, username) //we use call to hold the refrence and other objects context use 
     //get information from the other object by call 
    this.email= email
    this.password= password

 }

 const chai= new createUser("chai", "chai@gmail.com", "123");
 console.log(chai)