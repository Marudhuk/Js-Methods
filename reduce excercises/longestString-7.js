// Write a function that takes an array of objects with a name and grades property
// and returns a new array with only the objects where the average grade is greater
// than a given amount. Use the filter method to accomplish this.

let arr=['Marudhu','Yogesh','Sarooooooooooooo','Deva',"Uma"]
let x = arr.reduce((acc,v)=>{
    if(acc.length < v.length){
       acc=v
    }
    return acc
},''); 

console.log(x)