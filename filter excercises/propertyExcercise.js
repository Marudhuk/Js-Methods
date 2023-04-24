let arr=[
    {product:"shampoo",price:10},
    {product:'shoap',price:20},
    {product:'perfume',price:200},
    {product:'scent',price:100}
]
let x =arr.filter(e=>{
    return e.price>50
})
console.log(x)