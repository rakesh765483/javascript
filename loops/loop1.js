//for loop

// for (let i=1; i <=10; i++) {
//     console.log(i) ;
// }

//nested loop
// let n=10;
// for (let i = 0; i <n; i++) {
//     console.log(`outer loop value:${i}`);
//     for(let j=0;j<n;j++){
//         console.log(`inner loop value ${j}`)
//     }
// }


// array


// let myArray =["flash", "batman","superman"];
// for(let i=0;i<myArray.length;i++){
//     console.log(myArray[i])
// }

//keyword

//break and continue

// for(let i=1;i<=20;i++){
//     if(i==5){
//         console.log("5 detected")
//         break
//     }
//     console.log(`value of i is ${i}`)
// }

for(let i=1;i<=20;i++){
    if(i==5){
        console.log("5 detected")
        continue//ek bar k liye maaf kr diye
        
    }
    console.log(`value of i is ${i}`)
}

