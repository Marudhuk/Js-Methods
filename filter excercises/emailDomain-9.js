let arr=[
    {id:1,name:"Thangam",email:'abc@gmail.com'},
    {id:2,name:"Muthu",email:'abc@gmail.ai'},
    {id:3,name:"Ragul",email:'abc@gmail.io'},
    {id:4,name:"Saroo",email:'abc@gmail.en'}
]
let x =arr.filter(e=>{
    if(e.email.includes('io')){
        return e
    }
})
console.log(x)