let arr=[
    {id:1,name:'Muthu',age:20},
    {id:2,name:'Saroo',age:22},
    {id:3,name:'Marudhu',age:22},
    {id:4,name:'Thangam',age:20},
]
let x =arr.filter(e=>{
    return e.age>20
})
console.log(x)