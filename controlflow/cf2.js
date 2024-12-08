//switch

// const month="march"
// switch (month) {
//     case "jan":
//         console.log("january")
//         break;//break nhi rhega to case match hone k bad default k phle ka sara code run krega

//     case "feb":
//         console.log("feb")
//         break;
//     case "march":
//         console.log("march")
//         break;

//     default:
//         console.log("faltu")
//         break;
// }

// const userEmail='false'
// if(userEmail){
//     console.log("got user mail")
// }
// else{
//     console.log("did not get user mail")
// }

//false value-false,0,-0,BigInt 0n,null ,undefined,nan
//true value- true,"0",'false',"",[],{},function(){}
//how to check empty array

if(Array.length===0){
    console.log("empty")
}

//how to check empty object
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}

//true- false==0,false='',0=='' all three statements are true

//Nullish coalescing operartor(??):null undefined

let val1
//val1=null??10//5 jayega val1 me//0 me bhi 5 hi jayega
//val1=undefined??15
val1=null??10??15 // jo phle ayega vhi assign hota hai
console.log(val1)

// terniary operator
//condition ? true:false

const iceprice=100
iceprice<80?console.log("less than 80"):console.log("more than 80")
