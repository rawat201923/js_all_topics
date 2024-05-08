/*
The Promise object represents the eventual completion (or failure) of 
an asynchronous operation and its resulting value.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

*/
     
        //PROMISE FUNCTION STORE IN VARIABLE
const promiseOne = new Promise(function(resolve, reject){
            //do an async task
            //db calls, cryptography, network
            setTimeout(function(){
                console.log('async task is complete');
                resolve();
            },1000)
        })

        promiseOne.then(function(){
            console.log("promise consumed");
        })

       //PROMISE FUNCTION NOT STORE IN VARIABLE
        new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log('async task 2');
                resolve()
            },1000)
        }).then(function(){
            console.log('aync task 2 resolve');
        })

        //PROMISE 3rd FUNCTION
        const promiseThree = new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve({username:"chai", email:"chai@gmail.com"})



            },1000)
        })
        promiseThree.then(function(user){
            console.log(user);

        })

        //promise 4 function
        const promiseForth = new Promise(function(resolve,reject){
            setTimeout(function(){
                let error = true;
                if(!error){
                    resolve({username:"chai", password:"233445"})


                }else{
                    reject('error: something went wrong')
                }
            },1000)
                
            })

        // promiseForth.then(function(user){})
        promiseForth.then((user)=>{
            console.log(user);
            return user.username;
        })
        .then((username)=>{
            console.log(username);
        })
        .catch(function(error){
            console.log(error);
        })
        .finally(()=> console.log("The promise is resolved or resolved"));

        //promise 5 function
        const promiseFifth = new Promise((resolve,reject)=>{
            setTimeout(function(){
                let error = false;
                if(!error){
                    resolve({username:"javascript", password:"123"})


                }else{
                    reject('error: something went wrong')
                }
            },1000)
                
            })

            async function consumePromiseFifth(){
                try{
                    const response = await promiseFifth;
                    console.log(response);
                }catch(error){
                    console.log(error);
                }
            }

            consumePromiseFifth();

            // async function allUser(){
            //     try{
            //        const response= await fetch('https://jsonplaceholder.typicode.com/users/')
            //        console.log(response);
            //        const data = await response.json();
            //        console.log(data);
            //     }catch{
            //         console.log("e:", error);
            //     }
            // }

            // allUser();

            fetch('https://jsonplaceholder.typicode.com/users/')
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
                console.log(data)
            })
            .catch((error)=>console.log(error))


/* How You Know fetch in javascript

fetch keywords comes on 1 feb 2022 in node.js

fetch : The global fetch() method starts the process of fetching a 
        resource from the network, returning a promise that is 
        fulfilled once the response is available.

A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or 
a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.).
 Instead, a then() handler must check the Response.ok and/or Response.status properties.



*/
