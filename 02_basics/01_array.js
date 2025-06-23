//array

const myArr=[1,2,3,4,5,6]
console.log(myArr[2])

const myHeros=["a","b"]

const myArr2=new Array(1,2,3,4,5)


//Array methods

myArr.push(7)
myArr.push(8)

myArr.pop()




//myArr.unshift(0)   add zero at start of array
//myArr.shift()  // will delete the first element

// console.log(myArr.includes(3))
// console.log(myArr.indexOf(3))

// const newArr=myArr.join()

// console.log(myArr)  // type is object
// console.log(newArr)  //converted to string


// console.log(typeof(myArr))
// console.log(typeof(newArr))



//slice nd splice


console.log("Original",myArr)
const myn1=myArr.slice(1,3)  // only takes index 1 nd 2 
console.log("B",myn1)


console.log("Original",myArr)

const myn2=myArr.splice(1,3)  //  takes index 1, 2 and 3 and deletes it from the original array
console.log("C",myn2)

console.log("Original",myArr)