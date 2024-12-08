// const coding=["js","java","ruby"]
// const value=coding.forEach((item)=>{
//     console.log(item);
//     if (item=="java"){
//     return item;}
// })
// console.log(value)
//for each loop value return nhi kr rha hai then it will not be so useful


//filter takes call back function
// const nums=[1,2,3,4,5,6,7]
// let val=nums.filter((num)=>{
//     return num>4//agar curly braces use krte ho to return likhna pdega 
// })
// console.log(val)


// const Mynums=[1,2,3,4,5,6,7]
// let val2=nums.filter((number)=>(number<6))
// console.log(val2)

//for each

const newnum=[]
const nums=[1,2,3,4,5,6,7]
nums.forEach(number => {
    if(number>4){
        newnum.push(number)
    }
});
console.log(newnum)

