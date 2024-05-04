// high order array

// ["","",""]
// [{},{},{}]


/*/ 
   basic syntax  of [for from loop]
   for (const iterator of object) {
   }
/*/

const arr = [1,2,3,4,5]

for (const num of arr){
    // console.log(num);
}

const greetings= "hello world!"
for (const greet of greetings){
    // console.log(`Each char is ${greet}`)
}


/*************maps*************************///////
const map = new Map()   //Map() is itself aobject and known for unique values
map.set('IN',"INDIA")
map.set('USA',"United states of america")
map.set('Fr',"France")
map.set('IN',"INDIA")

console.log(map);

// for (const key of map) {

//     console.log(key);
// }
// destructure of above code
for (const [key, value] of map) {

    console.log(key, ':-', value);
}


/// map on objects  not working by this way
 const myObject = {
    'game':'NFS',
    'game2':'spiderman'
 }

 for (const [key,value] of myObject) {
    console.log(key ,":", value)
    
 }