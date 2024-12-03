//singleton
//object.create -constructor method -singleton is formed


//object literal

const mysym=Symbol("key1")

const jsuser={
    name:"rakesh",//name is key and rakesh is value
    "full name":"raku",
    age:20,
    location:"patna",
    email:"rakesh765483@gmail.com",
    isLoggedIn:false,
    lastLoggedinDays:["monday","saturaday"],
    //how to use symbol
    [mysym]:"myKey1"
}

//how to aceess object 

// console.log(jsuser.email)
// console.log(jsuser["email"])//this is another way to access the properties
// console.log(jsuser["full name"])//is these types this become very useful
// console.log(jsuser[mysym])
// jsuser.email="hiteshchatgpt"
// console.log(jsuser["email"])
// Object.freeze(jsuser)
// jsuser.email="hiteshmicrosoft"
// console.log(jsuser["email"])

jsuser.greeting=function(){
    console.log("hello js user")
}

jsuser.greetingtwo=function(){
    console.log(`hello js user ${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())