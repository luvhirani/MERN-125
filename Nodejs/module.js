// let {sum} = require("./function")
// let {sub} = require("./function")
// console.log(sum)

// let sumOfTwo = sum(10,22)
// console.log(sumOfTwo)

// let subOfTwo = sub(10,5)
// console.log(subOfTwo)

// destructuring

// let obj = {
//     fName : "Raj",
//     age : 20
// }

// let firstName = obj.fName
// console.log(firstName)
// let {fName} = obj
// let {age} = obj
// console.log(fName)
// console.log(age)

// user defined 
// external 


// inbuild / internal modules -> os, fs, event, path, http, buffer

// const os = require("os")
// console.log(os.freemem())
// console.log(os.cpus())
// console.log(os)

// fs
// const fs = require("fs")
// fs.writeFileSync("fs.txt","this is fs module")
// fs.unlinkSync("fs.txt")

// http
const http = require("http")
const server = http.createServer((req,res)=>{
    res.end("This is my http module")
    
})

server.listen(3001,"localhost", ()=>{
    console.log("Server is running on PORT 3001")
})