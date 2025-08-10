// const { use } = require("react");

// const userEmail ="h@hitesh.ai"

// if(userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");    
// }

// falsy values
// 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ",[], {}, fuction(){}

// if(userEmail.length ===0){
//     console.log("Array is empty");
// }

// const emptyObj ={}

// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null defined

let val1;
// val=5 ??10
// val =null ?? 10
// val = undefined ??12
val = null ?? 10 ?? 12

console.log(val);

// terniary operator

// condition ? true : false

const iceTeaPrice =100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80")
