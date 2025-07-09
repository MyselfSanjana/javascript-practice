let score = null
console.log(typeof score);
console.log (typeof(score));

let valueInNumber = Number(score)
console.log(valueInNumber);

// "33" => 33(string)
// "33abc" =. NaN not a number 
// true => 1
// false => 0

let isLoggedIn = 0
let BooleanisLoggedIn = Boolean(isLoggedIn)
console.log(BooleanisLoggedIn)

// 1=t> rue 
// 0 => false
// "" => false
// "sanjana" =>true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)

// *************** Operations ****************

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = " sanjana"
let str3 = str1+str2
console.log(str3)

console.log("1"+2)
console.log("1"+"2") //in both the above agr pehle string h toh aage se saare string hojaenge
console.log(1+"2") // abh isme nhi h string 1st pr ,lekin add kisme kre toh ans 12 aara h
console.log(1+2+"2") //or isme 32 bcz 1+2 =3 and 2 =32

console.log(true) //true
console.log(+true) //1

console.log(+"") //0

let gameCounter = 100
gameCounter++
console.log(gameCounter) //101