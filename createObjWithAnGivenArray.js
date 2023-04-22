let array=['hi','hi','is','friend','friend','is','is','hi']
let obj={};

val = array.map((e)=>{
    console.log(e)
    if(e in obj){
        return obj[e] += 1
    }else{
        return obj[e] = 1
    }
})
console.log(obj)


