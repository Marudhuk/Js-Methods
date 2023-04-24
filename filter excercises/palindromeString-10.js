let arr=["Muthu","madam",'sis','sir']
let x = arr.filter(e=>{
    y=e.split("").reverse().join("");
    if(e==y){
        return e
    }
})
console.log(x)