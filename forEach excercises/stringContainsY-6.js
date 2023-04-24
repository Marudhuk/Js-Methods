let str="Marudhuy"
let arr=str.split('')
let flag=0
arr.forEach(e=>{
    if(arr.includes('y')){
        flag=1
    }
})
if(flag){
    console.log("yes")
}else{
    console.log("no")
}