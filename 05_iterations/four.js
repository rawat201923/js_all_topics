const coding = ["js","ruby","java","python","cpp"]

coding.forEach(  function (item){
    // console.log(item)
})

coding.forEach((item)=>{
    // console.log(item);
})

function printMe(item){
//     console.log(item);
}
coding.forEach(printMe)  // give only refrence

coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr)
})


const myCoding = [
    {
        languageName:"javascript",
        laguageFile: "js"
    },
    {
        languageName:"java",
        laguageFile: "java"
    },
    {
        languageName:"python",
        laguageFile: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName,item.laguageFile)
})