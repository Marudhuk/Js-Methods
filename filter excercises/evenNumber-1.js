let arr=[1,2,3,4,5,6]
let x =arr.filter(e=>{
    if(e%2==0){
        return e
    }
})
console.log(x);