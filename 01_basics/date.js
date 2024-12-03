let mydate=new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toTimeString())
console.log(mydate.toLocaleString())

let mycreatedDate=new Date(2023,0,23)//-month 0 se start hota hai javascript k andar
console.log(mycreatedDate.toDateString())

let todaydate=new Date("2023-01-13")
let otherdate=new Date("01-14-2023")
console.log(todaydate.toLocaleDateString())
console.log(otherdate.toDateString())

let myTimeStamp=Date.now()
console.log(Math.floor(myTimeStamp/1000))
console.log(Math.floor(todaydate.getTime()/1000))

