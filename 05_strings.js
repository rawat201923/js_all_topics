// strings denotes by "" or '' or `` with ${var}

const name = "himanshi"
const repoCount = 50

console.log(name + repoCount + " Value")

console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc');
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "         himanshi "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://hiamnshi.com/himanshi%20rawat"
console.log(url.replace('%20','_'))

console.log(url.includes('why'))
console.log(url.includes('com'))

console.log(gameName.split('-'))