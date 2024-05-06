/// reduce method amd mapping
/*
acccumulator => empty variable 
acc= accumulator
currval = current value

    */

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:  ${acc} and currval: ${currval}` )
//     return acc + currval
// },0// initial value
// )

//using arrow function

const myTotal = myNums.reduce((acc,currval)=>acc+currval,0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:5999
    },
    {
        itemName:"mobiledev course",
        price:8999
    },
    {
        itemName:"data scientist course",
        price:12999
    },
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"js course",
        price:2999
    }
]

const priceTopay = shoppingCart.reduce((acc,item)=> {
    console.log(`acc:  ${acc} and currval: ${item.price}` )
    return acc+item.price},0)
                     
console.log(priceTopay)