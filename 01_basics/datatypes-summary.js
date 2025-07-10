/* primitive datatypes

there are 7 primitive datatypes:
String
Number
Boolean
null
undefined
Symbol
BigInt */

const score =100 //number
const isLoggedIn = false //bolean
const outsideTemp = null //null
let userEmail; //undefined
const id = Symbol("123") //symbol






/* reference (non primitive)
Array
Object
Function */

const heros = ["shaktiman","batman","ironman"]
let myObj = {
    name: "sanjana",
    age: 19,
}

const myFunction = function(){
    console.log("hello world");
    
}

//    Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


//******* Stack and Heap ********* 
//Stack (primitive) 
// stack ke andr kuch bhi value rakhenge toh uska copy milega
// ,Heap (non-primitive)
//heap me kuch bhi value rkhte h toh uska reference(changes orignal value me hojaega) milega

let myInstagramName = "sanjanabansal"
anotherName = "sanju1908"
console.log(myInstagramName) //sanjanabansal
console.log(anotherName) //sanju1908

let userOne ={
    email: "sanjana@gmail.com",
    phoneNo : "9899989905",
}
let userTwo = userOne

userTwo.email = "hellosanjana@gmail.com"
console.log(userOne) 
console.log(userTwo)
