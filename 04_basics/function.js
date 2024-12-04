// function sayMyName(){
//     console.log("h")
//     console.log("i")
//     console.log("t")
//     console.log("e")
//     console.log("s")
//     console.log("h")
// }
// sayMyName()

// function add(num1,num2){//parameters
//     console.log(num1+num2)
//     return num1+num2;//return k bad ka code execute nhi hoga 
// }
// result=add(3,"a")//arguments
// console.log(result)


// function loginuser(username){
//     return`${username} just logged in`
// }
// console.log(loginuser("hitesh"))


//when you dont know how many argument will come 

// function cartPrice(val1,val2,...num1){//rest operator-different from spread operator but looks same
//     return num1;
// }
// console.log(cartPrice(200,300,400,500,600))



// const user={
//     username:"rakesh",
//     price:199//if there is prices then there will be error
// }
// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
// }
// handleObject(user);
// handleObject(
//     {
//         username:"sam",
//         price:188
//     }
// )
// //passing array
// const myNewArray=[200,400,100,600]
// function returnSecondValue(getArray){
//     return getArray[1];
// }
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200,400,600]))

//scope


// let a=10
// const b=20
// var c=30
// console.log(a,b,c)

//

// function one(){
//     const username="rakesh"
//     function two(){
//         const website="youtube"
//         console.log(username);
//     }
//     //console.log(website);
//     two()
// }
// one()

// two ways to declare function
//1
console.log(addOne(5))
function addOne(num){
    return num+1
}


//2
console.log(addTwo(5))//--cannot access function before declaration
const addTwo=function(num){
    return num+2
}