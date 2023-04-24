let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
let sum1=0;
let sum2=0
arr1.forEach(e=>{
    sum1=sum1+e;
   
})
arr2.forEach(e=>{
     sum2+=e;
})

let sumOftwo=sum1+sum2;
console.log(sumOftwo)