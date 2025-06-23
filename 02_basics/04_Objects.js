// const tinderUser= new Object() // singleton obj
// console.log(tinderUser)

const tinderUser={}
tinderUser.id ="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser)


const regularUser = {
        email:"some@gmail.com",
        fullname:{
            username:{
                fisrtname:"v",
                lastname:"s"
            }
        }
}

// console.log(regularUser.fullname.username.fisrtname)

const obj1={1:"a", 2:"b"}
const obj2={3:"c",4:"d"}
//const obj3={obj1,obj2}
const obj31=Object.assign(obj1,obj2) // al the values will b stored in obj 1
// console.log(obj1) 
// console.log(obj31) 
const obj3=Object.assign({},obj1,obj2)//{} => optional parameter  if this then it will create empty obje and then store in it 
// console.log(obj3) 


const obj4= {...obj1,...obj2}
// console.log(obj4)


// console.log(tinderUser)

//console.log(Object.keys(tinderUser))


// destructring of an obj 

const course={
    name: "JS",
    price:"999",
    courseInstructor:"VS"
}

//course.courseInstructor

const {courseInstructor } = course
console.log(courseInstructor)  // VS
// rather than each time typing course.courseInstructor this while calling we can directly call this

const {courseInstructor: instructor}= course
console.log(instructor)  //Vs


























