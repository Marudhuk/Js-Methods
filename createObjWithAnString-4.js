let str="Environment"
let x =str.split('')
let obj={}
x.map(e=>{
    if(e in obj){
        obj[e]+=1
    }else{
        obj[e]=1
    }
})
console.log(obj)