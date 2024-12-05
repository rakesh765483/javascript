//immediately invoked function expression

// (function chai(){//named iife
//     console.log("db connected")
// })()//to reduce the global scope pullution

((name)=>{
    console.log(`db connected2 ${name}`);
})("rakesh");//arrow function and iife combined

//when you write two iife strictly use semicolon
