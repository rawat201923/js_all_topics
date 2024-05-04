// immediately invoked function expressions (iife)
// iife used to prevent the prblm which cause by global scope polution
///  () this create a block
(
    function chai(){
        console.log('db connected')
    }() //it is called iife
);

( function aurcode(){
    console.log('db connected');
})();

( (name) => {
    console.log(`db connected to ${name}`);
})('hiamni');





/*
topic : how does java script execute + call stack

javascript execution context

code files - > global EX
JAVASCRIPT is single thread 
> global execution context
> function execution
> eval execution context

code file -> memory creation phase, execution phase

code file : 
/////////////
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1+num2
    return total

}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)
////////////////////
steps of execution for above code:
step 1: global execution - it locate in this
step 2 : memory phase : collect variables and stored them
val1=> undefines
val2=> undefined
addnum=>defination of function
result1=>undefined
result2=>undefined
step 3: execution phase
val1<= 10
val2<= 5
addNum=>[new variable environment+ execution thread] IT IS A SAND BOX
                    || //AFTER work it delete
                     V
    memory phase
             val1=>undefined
             val2=>undefined
             total=>undefined
    execution context
            num1->10
            num->5
            total->15  //it return in global EC
REPEAT ALL STEPS AGAIN


/////**************CALL STACK**************/

function one()
{
    console.log("one")
}
function two()
{
    console.log("two")
}
function three()
{
    console.log("three")
}
one()
two()
three()

