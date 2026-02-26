// var age

// console.log(fullName)
// console.log(age)
// console.log(city)

// initialization
// let fullName = "Raj sharma"

// declare
// let fName 

// var age = 20
// const city = "jaipur"

// console.log(age)

// console.log("hello from script.js file")

// console.log(2+3)



// fullName = "Raj sharma"
// age = 20
// isEligible = true
// let city 
// let address = null


// Primitive
// console.log(typeof fullName)
// console.log(typeof age)
// console.log(typeof isEligible)
// console.log( city)
// console.log(typeof address)

// non primitive
// array
// let skills = ['html','css','js']
// console.log(skills)

// object
// let marks = {
//    tenth : "84%" ,
//    twelth : "82%" ,
//    graduation : "80%",
//    isPasses : true
// }
// console.log(marks.tenth)

// console.log(age)

// Operators 
// Arithmatic -> +,-,*,/(division),%(modulus), ++, -- (pre,post)

let num1 = 10;
let num2 = "10";
let num3 = num1 + num2
// console.log(typeof num2)
// console.log(num3)
// console.log(num1-num2)
// console.log(num1 * num2)
// console.log(num1/num2)
// console.log(num1 % num2)

// let preinc = ++num1
// console.log(preinc)

num1++;
// console.log(num1++)
// console.log(num1++)
// console.log(num1)
// console.log(num1--)
// console.log(num1--)
// console.log(num1--)
// console.log(--num1)
// console.log(num1)

// console.log(++num1)
// console.log(num1++) 

// assignment -> = 

// comparison -> <,>,<=,>=,!=,==,===

// console.log(num1 > num2)
// console.log(num1 < num2)
// console.log(num1 <= num2)
// console.log(num1 >= num2)
// console.log(num1 != num2)

// value, datatype
// console.log(num1 == num2) //loose equality ->value should be equal
// console.log(num1 === num2) //strict equality -> value, datatype should be equal and same

// console.log("true" == true)
// console.log("true" === true)

// console.log("true" == 1)
// console.log("true" === 1)

// console.log("false" == false)
// console.log("false" === false)

// console.log(false == 0)
// console.log(false === 0)

// console.log(true == 1)
// console.log(true === 1)

// console.log(0 == undefined) 
// console.log(1 == undefined)

// console.log(0 == null)
// console.log(1 == null)

// console.log(null == null)
// console.log(null === null)

// console.log(undefined == undefined)
// console.log(undefined === undefined)

// logical -> &&, ||, !
// console.log(10 > 5 && 5 > 4)
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// console.log(1 || 1)
// console.log(1 || 0)
// console.log(0 || 1)
// console.log(0 || 0)

// console.log(!true)
// console.log(!false)

// let, const, var 

// let fullName = "Raj sharma"
// var age = 20
// const city = "jaipur"
// state = "Rajasthan"

// Reassign
// fullName = "Ram Sharma"
// age="twenty"
// city = "pune"

// Redeclare
// let fullName 
// var age = 24
// const city 

// let Statename = "rajasthan"
// var cityname = "ajmer"
// const YourAge

// console.log(fullName,age,city)

{
    // let fullName = "Raj sharma"
    // var age = 20
    // const city = "jaipur"

    // console.log(fullName,age,city)
}

// conditional statements
// if-else
let age = 19;
// let city = "Ajmer"

// if(condition){
//     condition=true
// }
// else{
//     condition=false
// }

// if(age>=18 || city=="Jaipur"){
//     console.log("You can vote in Jaipur")
// }
// else{
//     console.log("You cannot vote in Jaipur")
// }

let marks = 15;

// if(marks >=75){
//     console.log("Grade A")
// }
// else if(marks >=50){
//     console.log("Grade B")
// }
// else if(marks >=25){
//     console.log("Grade C")
// }
// else{
//     console.log("Failed")
// }

// switch

// let day = 6;

// switch(day){
//     case 0: console.log("Sunday")
//     break;
//     case 1: console.log("Monday")
//     break;
//     case 2: console.log("Tuesday")
//     break;
//     case 3: console.log("Wednesday")
//     break;
//     case 4: console.log("Thursday")
//     break;
//     case 5: console.log("Friday")
//     break;
//     case 6: console.log("Saturday")
//     break;
// }

// Loops -> for
// for(initialize;condition;update){

// }

// for(let i = 0; i<=20; i++){

//     if(i%2!==0){
//         console.log(i)
//     }
// }

// let i = 0;

// while(i<=10){
//     console.log(i)
//     i++
// }

// let a = 10;
// let b = 20;
// let c = a+b;
// console.log(c)

// function declaration

// function create
// a,b -> parameters
function sum(a,b){
    // console.log(a+b)
    console.log("hello")
    return a+b;
    console.log("world")
    console.log(2+3)
}

// let addition = sum(2,2)
// console.log(addition)

// console.log(sum(12,23))

// console.log(sum(10,23))
// console.log(sum(10,20))

// function invocation/call
// 23,44 -> arguments
// sum()

// let sumOfTwo = sum(25,10)
// console.log(sumOfTwo * 2 )
// sum(22,43)

// default parameter
// multiply(1,2)

function multiply (a,b,c=10){
    // console.log(a,b,c)
    console.log(a*b*c)

    let d = a*b*c;
    return d;
    
    // return a*b*c;
}

// multiply(2,2,4)


// function greet(){
//     console.log("Hello, Good Morning")
//     // return "Hello, Good Morning"
// }

// let output = greet()
// console.log(output)

// function expression

const divide = function (a,b){
    console.log(a/b)
}

// divide(10,2)


// arrow-function -> shorter syntax 

// const sub = function (a,b){
//     let c = a-b
//     return c
// }

// const sub = (a,b) => {
//     let c = a-b;
//     return c;
// }

const sub = (a,b) => a-b;

// let subOfTwo = sub(20,10)
// console.log(subOfTwo)

// Array 
// collection of similar data types
let arr = ["aarvind","kunal","mohit","raj",0,1,2,3,true, false]
//          0         1        2       3

// let arr1= [1,2,3,4,5]
let arr2 = [6,7,8,9,10]
let arr3 = [5,4,8,1,2,3,6,2,1,6,14,23,11]
let arr5 = [1,2,3,4,[5,6,[7,8,[9]]]]


// console.log(arr1.length)
// console.log(arr1.indexOf(4))
// console.log(arr1.at(5))
// let arr3 = arr2.concat(arr1)
// console.log(arr3)

// let arr4 = arr3.sort((a,b)=>a-b)

// console.log(arr5.flat(3))

// console.log(arr1.includes(8))
// console.log(arr1.join(" "))

// let newLength = arr1.push(6)
// console.log(newLength)
// console.log(arr1.pop())

// arr1.shift()
// arr1.unshift(10)

// console.log(arr1)

// let slicedArr = arr1.slice(1,5)
// console.log(slicedArr)

// let splicedArr = arr1.splice(2,3,"a","b","c")
// console.log(arr1)
// console.log(splicedArr)


// callback -> a funct passed as an argument to another function
// hof -> a func which accept another funct as a parameter


let arr1= [1,2,3,4,5]
let price = [999,1299,599]
// console.log(arr1+","+price)
// let marks = [50, 72, 66, 92, 93, 25]
// let newArr = []

// for-each-> works with array only, does not change the original array, does not returns new array

arr1.forEach((value, index)=>{
    // console.log("Value:",value,"Index:",index)
    // return value+1;
    // newArr.push(value*2)
})
// console.log(arr1)
// console.log(newArr)

// map-> works with array only, does not change the original array, returns new array
// let newArr1 = arr1.map((elements, address)=>{
//     console.log("Value:",elements,"Index:",address)
//     return elements*2
// })
// console.log(arr1)
// console.log(newArr1)

// filter -> works with array only, returns the elements which fulfills certain condition
// let evenNum = arr1.filter((nums)=>{
    // console.log(nums % 2 === 0)
//     return nums % 2 == 0;
// })

// console.log(evenNum)

// reduce -> 
// let result = arr1.reduce((acc, curr)=>{
//    return acc+curr
// },0)

// console.log(result)

// Strings
let fName = "Raj"
let lName = 'SHARMA'

// console.log(typeof fName)
// console.log(lName.length)
// console.log(fName.at(2))
let fullName = fName.concat(" kumar ",lName)
// console.log(fullName)
// console.log(fName+" "+lName)
let str = "              hello world                "
// console.log(hello.replace("world", "duniya"))
// console.log(fName.toUpperCase())
// console.log(lName.toLowerCase())
// lName.slice()
// console.log(hello.split(" "))
// console.log(hello.substring(2,7))
// let newStr = str.trim()
// console.log(newStr.length)
// console.log(str.length)

// String Template Literals
let stuName = "Prem"
let greet = "How are You"
// console.log("Hello, Good Morning, Prem")
console.log(`Hello, Good Morning ${stuName}, ${greet}`)

let user1 = {
    fullName : "Kunal Verma",
    age : 20,
    isEligible: true,
    cook : function (recipe){
        // console.log("yes i can cook")
        return recipe
    },
   marks:{
    tenth: 70,
    twelth: 75,
    grad: 80
}
}

// console.log(user1.fullName)
// console.log(user1.age)
// console.log(user1.cook("maggie"))
// console.log(user1.run)
// console.log(user1.marks.twelth)

// user1.city = "Jaipur"
// user1.age = 21
// console.log(user1)

// console.log(Object.keys(user1))
// console.log(Object.values(user1))
// console.log(Object.entries(user1))

let data = [
     {
        fullName : "Kunal Verma",
        age : 20,
        isEligible: true,
    },
    {
        fullName : "Prem",
        age : 21,
        isEligible: true,
    },
    {
        fullName : "Ravi",
        age : 22,
        isEligible: true,
    }
]

// console.log(data[1].fullName)
 
// primitive datatypes are copied by value 
let a = 10;
let b = a;
a=20;
// console.log(a)
// console.log(b)


let obj1 = {
    fName: "Raj",
    city: "Jaipur",
    age:20,
    marks:{
        tenth: 70,
        twelth: 75,
        grad: 80
    }
}

// Objects are immutable, objects are copied by reference/address and not by value
// let obj2 = obj1;
// console.log(obj2)

// let obj2 = Object.assign(obj1)

// spread operator
// let obj2 = {...obj1}

// let obj2 = JSON.parse(JSON.stringify(obj1))

obj1.fName = "Shyam"
obj1.marks.twelth = 60

// let obj3 = ()

// console.log({...obj1})

// console.log(obj1)
// console.log(obj2)

// In-built object
// const date = new Date()
// console.log(date.getDay()) 
// console.log(date.getFullYear()) 
// console.log(date.getTime()) 
// console.log(date.getMonth())


// Math Object 
// console.log(Math.PI)
// console.log(Math.SQRT2)
// console.log(Math.max(2,4,1,6,3,9))
// console.log(Math.min(2,4,1,6,3,9))

// let random = Math.random()
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.1))
// console.log(Math.round(6.9))   

// random number , 6 digit, integer
// console.log(Math.floor( random * 1000000 ))

// let day = "Thursday"
// day = true
// console.log(day)

function verify(result) {
    if (result === "pass") {
      console.log("Passed")
    } else {
      console.log("Failed")
    }
  }

verify("pass")