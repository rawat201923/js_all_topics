// loops  ***********//////

//***************for**************//


for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number")
    }
    // console.log(element);
    
}

for (let i= 0; i < 5; i ++) {
    // console.log(`outer loop : ${i}`)
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        // console.log(i+'*'+j+"="+i*j)
    }
    
    
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}

//break and continue

for (let index = 0; index < 20; index++) {
    if(index == 5){
        // console.log(`defeacted`);
        // break;
        continue; //it skip the condition
    }
    // console.log(`value of i is ${index}`)
    
}


//*************while, **************//

let index=0
while (index<=10) {
    // console.log(`value of index is ${index}`);
    index= index+2
   
}

let arr= 0
while(arr< myArray.length){
    console.log(`VALUE IS ${myArray[arr]}`);
    arr = arr+1;
}



// //*************do while**************//
// firstly execution of code and check condn in fast

let score = 11
do{
    console.log(`score is ${score}`)
    score++
}while(score<=10);