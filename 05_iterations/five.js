//map not return values

// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// })

// console.log(values);


//********fiter return values
const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums1 = myNums.filter((num)=> num > 4)
// console.log(newNums1)

// const newNums2 = myNums.filter((num)=> {
//     return num > 4           

// })

// console.log(newNums2)

const newNums = []

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
// console.log(newNums)

/////////using map

// const numbers = [1,2,3,4,5,6,7,8]

// const newNumbers = numbers.map((num)=> {
//      return num + 3 
// })

// console.log(newNumbers);

////////////////////////chaining

const numbers = [1,2,3,4,5,6,7,8,9,10]

const newNumbers = numbers
.map((num)=> num * 30)
.map((num)=>num+1).filter((num)=> num >= 40)

console.log(newNumbers);