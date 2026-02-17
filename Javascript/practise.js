// Count the number of negative integers in an array
let arr = [1,2,3,-3,-5,-1,5]

//output -> 3

function countNegative(arr){
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] < 0){
            count = count + 1;
        }
    }
    return count;
}

let res = countNegative(arr)    
console.log(res)

// given an array and an element, return the index of that element
let arr1 = [1,2,3,-3,-5,-1,5]
let element = -1
// output -> 5

// find the mid element in an array 
// let arr1 = [1,2,3,-3,-5,-1,5] -> output= -3
// let arr = [1,2,3,-3] -> output= 2

// check the string is pallindrome or not 
// input -> "NAMAN"
// Output -> string is pallindrome 
// input -> "HELLO"
// output -> string is not pallindrome

// reverse a string 
// input -> "YASH"
// output -> "HSAY"

