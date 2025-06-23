const num1=[1,2,3,4,5]
const num2=[6,7,8,9,10]

//num1.push(num2)


// console.log(num1)  //[ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]
// console.log(num1[5]) //[ 6, 7, 8, 9, 10 ]

// const num3= num1.concat(num2)
// console.log(num3)  
// //[
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]


//spread optr

// const num4 =[...num1,...num2]  // if we want to concat more than 2 array it is more prefarable

// console.log(num4) 
/*
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
  */ 




const num5=[1,2,[3,4],5,[6,[7,8]]]

// const num6=num5.flat(Infinity) // we can give exac dept 
// console.log(num6)   
/*
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
*/

const num7=num5.flat(1)
console.log(num7) //[ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]

console.log(Array.isArray("Vandana"))
console.log(Array.from("Vandana"))
console.log(Array.from({name: "Vandana"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));