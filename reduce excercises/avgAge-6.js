// Write a function that takes an array of objects with a name and age property and
// returns the average age of all the objects. Use the reduce method to accomplish
// this.


let arr=[
    {id:1,name:'Muthu',age:20},
    {id:2,name:'Saroo',age:22},
    {id:3,name:'Marudhu',age:22},
    {id:4,name:'Thangam',age:20},
]
let x = arr.reduce((acc,v,i)=>{
    let sum = acc+v.age
    if(i==arr.length-1){
        return sum/arr.length
    }else{
        return sum
    }
},0)
console.log(x)