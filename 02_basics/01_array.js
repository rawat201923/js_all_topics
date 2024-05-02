// array ******************/
//indexing of array start from 0
// shallow copies: share the same refrences
// deep copies : do not share the same references

const myArr = [0,1,2,3,4,5]


const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

//****array methods*********** */
// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.unshift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)


//slice ,splice******************************************************************//////

// console.log("A ",myArr);           // original array



const myArrN1 = myArr.slice(1, 3) //it dont manipulate original array
// console.log("B ", myArr);
// console.log(myArrN1);


const myArrN2 = myArr.splice(1, 3) // it manipulates original array and add end element
// console.log("C ", myArr);
// console.log(myArrN2);


///************part 2********************//

const myHeros = ["thor", "Ironman", "spiderman"]
const dc_heros= ["superheros", "flash", "batman"]

// myHeros.push(dc_heros);

// console.log(myHeros);
// console.log(myHeros[3][1])

// const allheros = myHeros.concat(dc_heros);
// console.log("All Heros : " ,allheros);

const all_new_heros = [...myHeros, ...dc_heros];  //spread use to concat multiple arrays
// console.log("All Heros : " ,all_new_heros);

//array inside the array//////////////

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Himanshi"))

console.log(Array.from("Himanshi"))

console.log(Array.from({name:"Himanshi"})) //interesting 

let score =100
let score1 =200
let score2 = 300

console.log(Array.of(score,score1, score2))
