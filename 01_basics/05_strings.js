const name = "sanjana"
const age = "19"

// console.log(name + age ) ye toh old method h

// new method 
console.log(`hello my name is ${name}, and my age is ${age}.`);

const gameName = new String('abcdefgh')

console.log(gameName[2]) //c
console.log(gameName.__proto__) //{}
console.log(gameName.length) //8
console.log(gameName.charAt(2)) //c
console.log(gameName.indexOf('s')) //-1 kyuki hai hi nhi

const newString =gameName.substring(0,4)
console.log(newString) //abcd

const anotherString = gameName.slice(0,3)
console.log(anotherString) //abc

const newStringOne ="    sanjana     "
console.log(newStringOne.trim()) //sanjana

const url ="https://hellosanjana%20bansal.com"
console.log(url.replace('%20','-')) //https://hellosanjana-bansal.com

console.log(url.includes('sundar')) //false

