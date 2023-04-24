let arr = [
    { id: 1, name: "Saroo", category: 'biology' },
    { id: 7, name: "Saroo", category: 'biology' },
    { id: 2, name: "Muthu", category: 'Maths' },
    { id: 3, name: "Muthu", category: 'Maths' },
    { id: 4, name: "Muthu", category: 'Maths' }
]
let y=[]
let x =arr.filter(e=>{
    if(!y.includes(e.category)){
        y.push(e.category) 
    }
})
console.log(y);