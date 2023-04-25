// Write a function that takes an array of objects with a price property and returns
// the total cost of all the objects. Use the reduce method to accomplish this.

let arr=[
    {product:"shampoo",price:10},
    {product:'shoap',price:20},
    {product:'perfume',price:200},
    {product:'scent',price:100}
]
let x = arr.reduce((acc,currentValue)=>{
    return acc+currentValue.price
},0)
console.log(x)