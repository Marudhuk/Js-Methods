// Write a function that takes an array of objects with a quantity and price property
// and returns the total cost of all the objects, considering the quantity of each
// object. Use the reduce method to accomplish this.

let arr=[
    {product:"shampoo",price:10,quantity:1},
    {product:'shoap',price:20,quantity:2},
    {product:'perfume',price:200,quantity:3},
    {product:'scent',price:100,quantity:2}
]
let x = arr.reduce((acc,currentValue)=>{
    return acc+currentValue.price*currentValue.quantity
},0)
console.log(x)