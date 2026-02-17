// let products = ["shirt", "mobile", "jacket"]

// function addToCart(products){
// }
// .then(totalBill)
// .then(payment)
// .then(orderTrack)
// .catch(err)

// function totalBill (){

// }

// function payment (){

// }

// function orderTack(){

// }

// addToCart( 
//     products, totalBill
//     (payment(
//          orderTack()
//         ) 
//     )
// )

// function addToCart(products , 
//     function totalBill ( 
//         function payment ( 
//             function orderTack(){ }){

// }){
// }){

// }


// setTimeout(()=>{
//     console.log("Inside setTimeout")
// let data = fetch("https://jsonplaceholder.typicode.com/todos/1")
// console.log(data)
// },4000)

// setInterval(()=>{
//     console.log("Inside setInterval")
// },2000)

// Promise 

// console.log(1)

// setTimeout(()=>{
//     let data = fetch("https://jsonplaceholder.typicode.com/todos/1")
//     console.log(data)
// },4000)

// console.log(2)

// error handling

// let voting = new Promise((resolve, reject)=>{

//     let age = 17

//     if(age>18){
//         resolve("you can vote")
//     }
//     else{
//         reject("You cannot vote")
//     }
// })

// voting.then(()=>{console.log("Go and vote now")})
// .catch((err)=>{console.log(err)})
// promise chaining

// async - await 

console.log(1)

async function run(){
   try {
    console.log(2)

    let data = await fetch("https://jsonpl.typicode.com/todos/1")
    
    
    console.log(data)

   console.log(4)
   } catch (error) {
       console.log(error)
        return error
   }
}
run()

console.log(3)