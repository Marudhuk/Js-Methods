let arr=['Hi','Hi','string','string','hi'];
let x=[]
arr.map(e=>{
     if(!x.includes(e)){
        x.push(e);
     }
})
console.log(x);