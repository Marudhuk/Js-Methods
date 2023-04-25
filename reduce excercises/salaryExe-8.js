// Write a function that takes an array of objects with a date property and returns a
// new array with only the objects where the date is within a given range. Use the
// filter method to accomplish this.


let arr=[
    {id:1,name:'Muthu',age:20,salary:10000},
    {id:2,name:'Saroo',age:22,salary:20000},
    {id:3,name:'Marudhu',age:22,salary:30000},
    {id:4,name:'Thangam',age:20,salary:20000},
]
let x = arr.reduce((acc,v)=>{
    return acc+v.salary
},0)
console.log(x);
