let arr=[
    {id:1,name:'Muthu',age:20,hobbies:'playing ',grade:"A",mark:100},
    {id:2,name:'Saroo',age:22,hobbies:'reading',grade:"B",mark:90},
    {id:3,name:'Marudhu',age:22,hobbies:'reading',grade:"A",mark:91},
    {id:4,name:'Thangam',age:20,hobbies:'walking',grade:"C",mark:85},
]
let x = arr.filter(e=>{
    if(e.mark>90){
        return e
    }
})
console.log(x)