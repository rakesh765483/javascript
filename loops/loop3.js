// for of loop

//[{},{},{}]-array k ander object

// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }
const greetings="hello world";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

//maps
const map=new Map()
map.set('IN',"india")
map.set('USA',"united states of america")
map.set('FR',"france")
console.log(map)//only store unique value and order will be same in which it is placed

for (const key of map) {
    console.log(key)
}
for (const [key,value] of map) {
    console.log(key,':-',value);
}

//for of loops on objects

const myObject={
    game1:"nfs",
    game2:"spiderman"
}
for (const game of myObject) {
    console.log(game)
}//object is not iteratable