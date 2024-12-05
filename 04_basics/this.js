//arrow function


// const user={
//     username:"rakesh",
//     price:99,
//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to website`)
//         console.log(this)
//     }

// }
// user.welcomeMessage()
// user.username='sam'
// user.welcomeMessage()
//console.log(this)//empty object but in browser it refer to global window object

//
// function chai(){
//     let username="rakesh"
//     console.log(this.username)//this keyword cannot be used inside the function
//     //only can be used inside the object 
// }
// chai()

// const chai=function(){
//     let username="rakesh"
//     console.log(this.username)
// }
// chai()
//undefined 

// const chai= ()=>{//arrow function
//     let username="rakesss"
//     console.log(this.username)
// }
// chai()//undefined


//arrow function

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }


//implicit return

// const addTwo=(num1,num2)=> num1+num2//no need to write return keyword
// const addTwo=(num1,num2)=>(num1+num2)//do not use curly braces
// console.log(addTwo(4,5))

// to return object
const objectreturn=(num1,num2)=>({username:"raeksh"})
console.log(objectreturn(2,3))



