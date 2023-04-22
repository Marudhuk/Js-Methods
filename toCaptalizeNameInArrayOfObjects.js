let obj=[
    {name:"marudhu",age:22},
    {name:"deva",age:23},
    {name:"yogesh",age:22},
    {name:"ponni",age:23}
]
function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}
let x=obj.map(e=>e.name)
console.log(x)
// console.log(x.forEach(e=>capitalize(e)))