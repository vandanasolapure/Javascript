// two ways to declare objects 
//litreals and constructor
// singleton 


// object literals


Object.create  // by constructor

const mySym =  Symbol("Key1");


const jsUser={
        name: "Vandana",
        [mySym]:"myKey1",
        "full name":"VS",
        email:"vs@google.com",
        age: 10,
        location: "Pune",
        isLoggedIn: false,
        lastLoginDays:["Monday","Saturday"]

}

// Ways to create the object


// console.log(jsUser.email)  // its the bad way to declare

// //good one
// console.log(jsUser["email"])

// console.log(jsUser.full name)// we cannot declare in this way

//console.log(jsUser["full name"])
// console.log(typeof jsUser.mySym)   // string

//  console.log(jsUser[mySym])


// console.log(typeof jsUser[mySym]) 


// jsUser.email="VS11@gpt.com"

// console.log(jsUser)


//if we want that anyone should't change my object then 

// Object.freeze(jsUser)

// jsUser.email="VS11@apple.com"

// console.log(jsUser)





jsUser.greeting=function(){
    console.log(`hello ${this.name}`)
}


console.log(jsUser.greeting())