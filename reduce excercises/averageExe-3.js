let arr=[5,5,5,5]
let x = arr.reduce((acc,currentValue,index)=>{
    let sum=acc+currentValue;
    if(index==arr.length-1){
        return sum/arr.length
    }else{
        return sum
    }

})
console.log(x)