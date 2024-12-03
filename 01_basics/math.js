const score=300
console.log(score)
const balance =new Number(100)//100 % guarrantee that it will be a number
console.log(balance)
console.log(balance.toString().length)
console.log(typeof(balance))
const newbalance=balance.toString();
console.log(newbalance.length)
console.log(balance.toFixed(3))
const othernum=123.89
console.log(othernum.toPrecision(4))
const num=100000000
console.log(num.toLocaleString())
console.log(num.toLocaleString('en-IN'))


//************ MATH *****************

console.log(Math)
console.log(Math.abs(-3))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(5.3))
console.log(Math.random())// always 0 to 1 
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

// to generate the number between 10 ND 20
const max=20
const min=10
console.log(Math.floor(Math.random()*(max-min+1)+min))
