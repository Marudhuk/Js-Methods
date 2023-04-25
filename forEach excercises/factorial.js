let arr = [1,2,3,4,5];
let x=[]
arr.forEach(e=>{
    x.push(fact(e))
})

function fact(a){
    if(a==0){
        return 1
    }
   return a*fact(a-1)
}
console.log(x);
