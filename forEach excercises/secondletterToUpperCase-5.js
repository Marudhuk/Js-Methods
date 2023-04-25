let str="marudhu"
let arr= str.split('')
arr.forEach((e,i)=>{
    if(i%2!==0){
        arr[i]=arr[i].toUpperCase()
    }
})
console.log(arr.join(''))