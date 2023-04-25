let x =[1,2,3,4]
let y =[5,6,7,8]
arr=[]
x.forEach((e,r)=>{
    y.forEach((s,i)=>{
        if(r==i){
            arr.push(e+s)
        }
    })
})
console.log(arr)