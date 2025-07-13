const myArray = [0,1,2,3,4,5]
console.log(myArray)

// //  // array methods 

// //  myArray.push(4)
// //  console.log(myArray)//[0, 1, 2, 3,4, 5, 4]
// //  myArray.pop()
// //  console.log(myArray)//[ 0, 1, 2, 3, 4, 5 ]

// //  myArray.unshift(6)
// //  console.log(myArray) //[ 6, 0, 1, 2, 3, 4, 5 ]
 
// //  myArray.shift()
// //  console.log(myArray) //[ 0, 1, 2, 3, 4, 5 ]

//  console.log(myArray.includes(4)) //true
//  console.log(myArray.includes(9)) //false
//  console.log(myArray.indexOf(9)) //-1

//  const newArray = myArray.join()
//   console.log(myArray) 
//   console.log(newArray) //0,1,2,3,4,5


  // slice and splice //
  console.log("A",myArray)  //A [ 0, 1, 2, 3, 4, 5 ]=>[ 1, 2, 3 ]

  const myn1 = myArray.slice(1,4)

  console.log(myn1) 
  console.log("B",myArray)//B [ 0, 1, 2, 3, 4, 5 ] 


  const myn2 = myArray.splice(1,4)
  console.log("C",myArray)
  console.log(myn2) //C [ 0, 5 ] =>[ 1, 2, 3, 4 ]
  



