let arr=[
    {id:1,name:"Thangam",date:"2002-11-05"},
    {id:2,name:"Muthu",date:"2002-07-15"},
    {id:3,name:"Ragul",date:"2000-09-02"},
    {id:4,name:"Saroo",date:"2000-08-30"}
]
let x = arr.filter(e=>{
    if(new Date(e.date).getFullYear()>2000){
        return e
    }
})
console.log(x)