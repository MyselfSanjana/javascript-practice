const score = 400
const balance = new Number(100)

console.log(score) //400
console.log(balance) // [Number:100]

console.log(balance.toString()) //100
console.log(balance.toString().length) //3
console.log(balance.toFixed(1)) //100.0

const otherNumber = 123.4567
console.log(otherNumber.toPrecision(4)) //123.5

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) //10,00,000


       //******** Math ***********


console.log(Math); //object [Math]{}
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.min(4,3,6,8)); //3
console.log(Math.max(4,3,6,8));//8 
console.log(Math.random()); // 0.16152385460810148 any random value btwn 0-1

const min= 10
const max =40
console.log(Math.floor(max-min +1) + min) //41