//Write a function that takes an array of numbers and returns the sum of all the
//numbers. Use the reduce method to accomplish this.


let arr=[1,2,3,4,5,6,7,8,9,10];
let x = arr.reduce((acc,currentValue)=>{
    console.log(acc,"hi",currentValue)
    return acc+currentValue
},0)
console.log(x);