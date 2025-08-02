//  Primtive

//7 types : String ,Number ,Boolean ,Null ,Undefined ,Symbol ,Bigint

const score =100
const scoreValue =100.3

const isLoggedIn=false
const outsideTemp= null
let userEmail;

const id= Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

const bigNumber=23456543214546453422345n


//Reference (Non primitive)
 
//Array ,Objects ,Functions

const heros=["shaktiman","naagraj","doga"]
let myobj={
    name:"Aman",
    age: 24,
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

//Stack (Primitive)  and   Heap (Non -Primiitive)

let myName="AmanKranti"

let anotherName = myName
anotherName="AyushmanPatel"

console.log(myName);
console.log(anotherName);

let userOne={
    email:"user@g.com",
    upi:"user@ybl"
}

let userTwo=userOne
userTwo.email="azl,kjndn"

console.log(userOne.email)
console.log(userTwo.email)