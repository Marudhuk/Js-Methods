let arr = [
    { id: 1, name: "Saroo", category: 'biology' },
    { id: 7, name: "Saroo", category: 'biology' },
    { id: 2, name: "Muthu", category: 'Maths' },
    { id: 3, name: "Muthu", category: 'Maths' },
    { id: 4, name: "Muthu", category: 'Maths' }

]
let obj = {}
let x = arr.map(e => { 
    console.log(e);
    if(e.category in obj){
        obj[e.category].push(e)
    }else{
        obj[e.category]=[e]
    }
})
console.log(obj);
