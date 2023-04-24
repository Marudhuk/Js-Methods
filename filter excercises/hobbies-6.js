let arr=[
    {id:1,name:'Muthu',age:20,hobbies:'playing '},
    {id:2,name:'Saroo',age:22,hobbies:'reading'},
    {id:3,name:'Marudhu',age:22,hobbies:'reading '},
    {id:4,name:'Thangam',age:20,hobbies:'walking'},
]
let x = arr.filter(e=>{
    return e.hobbies=="reading"
})
console.log(x)