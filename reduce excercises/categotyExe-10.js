// Write a function that takes an array of strings and returns a new array with only
// the strings that are palindromes. Use the filter method to accomplish this.

let arr = [
    { id: 1, name: "Saroo", category: 'biology' ,price:100 },
    { id: 7, name: "Saroo", category: 'biology',price:200 },
    { id: 2, name: "Muthu", category: 'Maths' ,price:100},
    { id: 3, name: "Muthu", category: 'Maths' ,price:50},
    { id: 4, name: "Muthu", category: 'Maths' ,price:70}
]

let x = arr.reduce((acc,v)=>{
    if(v.category in acc){
        acc[v.category]+=v.price
    }else{
        acc[v.category]=v.price
    }
     return acc
},{})
console.log(x)