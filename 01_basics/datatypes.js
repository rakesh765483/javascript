"use strict"// treat all js code as newer version
console.log();
let name="rakesh"//string data types
let age=18 //number value
let isLoggedIn=false//bool
//number =>2 to power 53
//bigint
//string may be in single or double quote
//null-stand alone value - type object
//undefine=> type undefined
//symbol-used in react for 


//objects

//there are two types of data types-primitive and non primitive
//primitive-call by value-copies-changes will be in copies-
//string,number boolean null undefine symbol big int 

/*non primitive-call-call be reference
array
objects
functions
*/
const score=100
const scoreValue=100.3
const isLoggedin=false
const outsideTemp=null
let userEmail;
const id= Symbol('123');
const anotherid= Symbol('123');// javascript is case sensetive so take care of this 

//console.log(id===anotherid);

//function as a datatypes
const myFunction=function(){
    console.log("hello wolrd");
}
console.log(typeof(myFunction))//function data types




//**********   types of memory    ******* */
//stack memory-primitive- copy
//heap memory-non primitive-by reference

//example of heap datatype
const user1={
    email:"rakesh765483",
    upi:"user@paypal"
}
let user2=user1;
user2.email="faltuemial";
console.log(user1.email);
console.log(user2.email);
