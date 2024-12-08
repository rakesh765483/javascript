const num=[1,2,3,4,5,6,7]
// const mytotal=num.reduce(function(acc,currval){
//     console.log(acc,currval)
//     return acc+currval;
// },0)
// console.log(mytotal)

const mytotal2=num.reduce((acc,currval)=>acc+currval,0)
console.log(mytotal2)