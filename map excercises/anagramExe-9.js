let arr=['Muthu','Uma','deva']
let obj={}
arr.map(e=>{
    obj[e.toLowerCase().split('').sort().join('')]=e
})
console.log(obj)