// const coding=["js","java","ruby"]
// //for each loop
// coding.forEach(function (item){
//     console.log(item)
// })//callback function me no name

//you can also use arrow function

// coding.forEach((item)=>{
//     console.log(item)
// })

//
// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)

// 
//coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

//array k andr object
const mycoding=[
    {
        langName:"javascript",
        langFile:"js"
    },
    {
        langName:"python",
        langFile:"py"
    },
    {
        langName:"c++",
        langFile:"cpp"
    }
]

mycoding.forEach(element => {
    console.log(element.langName)
});