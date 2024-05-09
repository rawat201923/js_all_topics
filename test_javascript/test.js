const myArray = []


/*

Arrays 
KIND OR TYPES:  continious ARRAY, holey array

OPTIMIZATION
 > smi (small integer)
 > packed element
 > double(float,string, function)

 array includes elements 

  ********************************  
   | SMI > DOULE > PACKED        | 
   | H_SMI > H_DOUBLE > H_PACKED |
   ******************************
*/

//COUNTINIOUS ELEMENTS ARRAY
const arrTwo = [1,2,3,4,5]  
//PACKED_SMI_ELEMENTS (BEST OPTIMISE) (only it takes numbers)

arrTwo.push(6.0)
//PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
//PACKED_ELEMENTS

arrTwo[10] = 11
//HOLEY_ELEMNETS

console.log(arrTwo);

console.log(arrTwo.length);
console.log(arrTwo[4])

//bound check 
//hasOwnProperty(arrTwo,9)
//hasownProperty(arrTwo.prototype,10)
//hasOwnProperty(Object.prototype,10)

//holes are very expensive in js

const arrThree = [1,2,3,4,5]
console.log(arrThree)
console.log(arrThree[2]);

const arrFour = new Array(3)
//just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1'
arrFour[0] = '2'
arrFour[0] = '3'