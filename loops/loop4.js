// const myobject={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift by ruby'
// }

// //for in loop
// for (const key in myobject) {
//     console.log(key)
//     console.log(myobject[key])
//     console.log(`${key} is shortcut for ${myobject[key]}`)
// }

//for in loop for javascript

// const prog=["js","rb","java"];
// for (const key in prog) {
//     console.log(key)
//     console.log(prog[key])//object ka design hi isiliye hua tha taki keys ko kuch bhi asign kiya ja ske
// }

//map for in loop

const map=new Map()
map.set('IN',"india")
map.set('USA',"united states of america")
map.set('Fr',"france")
for (const key in map) {
    console.log(map[key])//map is not iterable so no value
}

//object k ander for in use krna 

