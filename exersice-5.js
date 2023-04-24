let arr = [
    { id: 1, name: "Saroo", category: 'biology' },
    { id: 7, name: "Saroo", category: 'biology' },
    { id: 2, name: "Muthu", category: 'Maths' },
    { id: 3, name: "Muthu", category: 'Maths' },
    { id: 4, name: "Muthu", category: 'Maths' }

]
let obj = {}
let x = arr.map(e => { 
    return obj[e.category] = [{ id: e.id, name: e.name }]
})
console.log(obj);

// if(obj=={}){
//     console.log("ERRO")
//     obj[e.category]=e
// }else{
//     obj[e.category].push(e)
// }





