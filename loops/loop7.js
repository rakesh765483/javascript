const myNumber=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumber.map((item)=>item+10)
// console.log(newNums)

//chaining
const newnums=myNumber
                      .map((item)=>item+10)
                      .map((item)=>item+20)
                      .filter((item)=>item%2)
console.log(newnums)