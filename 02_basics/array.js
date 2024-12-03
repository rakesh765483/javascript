// // array
// const myArr=[1,3,4,5,"rakesh",'hello']// in js array are hetrogeneous 
// so they can contain element of different types
// js array are resizable
// console.log(myArr[4])
// shallow copy-A shallow copy creates a new object, but it only copies the references (or addresses) of the inner objects. The new object and the original object share the same inner object

// deep copy-Definition: A deep copy creates a completely independent object, duplicating all referenced data. Changes to the copied data do not affect the original.

// const myarr=new Array(1,2,3,4)
// // console.log(myarr[1])

//Arr methods

// myarr.push(6);
// console.log(myarr);
// myarr.pop();
// myarr.unshift(9)
// console.log(myarr)
// myarr.shift()
// console.log(myarr)
// console.log(myarr.includes(3))
// const newarr=myarr.join()
// console.log(myarr)
// console.log(typeof(newarr))//string


//slice and splice

// console.log("A",myarr)
// const myn1=myarr.slice(1,3)//isme 3rd index include nhi hoga 
// console.log(myn1)
// console.log("B",myarr)
// const myn2=myarr.splice(1,3)//last range  is included and origianal arr is modified
// console.log(myn2)
// console.log("c",myarr)




const marvel=["thor","Ironman","spiderman"]
const dc=["superman","flash","batman"]
// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3])

// console.log(marvel.concat(dc))//now it will print new aarray all combined
// console.log([...marvel,...dc])//widely used it serve same purpose
const another=[1,2,3,[4,5,[6]],7,7]
const newanother=another.flat(Infinity)//concat all other array of any depth 
console.log(newanother)
console.log(Array.isArray(3))
console.log(Array.from("hitesh"))
console.log(Array.from({name:"rakesh"}))//gives empty array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))