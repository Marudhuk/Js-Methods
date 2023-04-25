// Write a function that takes an array of strings and returns an object where the
// keys are the strings, and the values are the number of times each string appears
// in the array. Use the reduce method to accomplish this.


let arr=['Muthu','Goutham','Saroo','Muthu','Muthu',"Goutham"]

let x = arr.reduce((e,s)=>{
   if(s in e){
    e[s]+=1
   }
   else{
    e[s]=1
   }
   return e
},{})
console.log(x)