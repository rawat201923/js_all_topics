/*
basic syntax  of [for in loop]

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb:"ruby",
    swift:"swift by apple"

}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);

  
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    //  console.log(programming[key])
        
    }

//     const map = new Map()    //it is not iterable
//     map.set('IN',"INDIA")
//     map.set('USA',"United states of america")
//     map.set('Fr',"France")
//     map.set('IN',"INDIA")

// for (const key in map) {
//         console.log(key)
//     }

