// //singleton
// //declaration with help of constructor

// const tinderUser=new Object()//singleton object
const tinderUser={}//non singleton object
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoogedIn=false
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
//console.log(tinderUser.hasOwnProp)
// const regularuser={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"hitest",
//             lastname:"kumar",
//         }
//     }
// }
// console.log(regularuser.fullname.userfullname.firstname)

// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj4={5:"e",6:"f"}
//to combine
// // const obj3=Object.assign({},obj1,obj2,obj4)
// const obj3={...obj1,...obj2,...obj4}//most used and easy to use
// console.log(obj3)

//data base se value ayega -objects inside array

// const users=[
//     {
//         id:1,
//         email:"djfds",

//     },
//     {

//     },
//     {

//     }
// ]
// console.log(users[0].email)