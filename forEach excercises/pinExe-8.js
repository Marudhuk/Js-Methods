
function func() {
   let input = number(prompt("Enter input"));
   pin(input)
}
let x = 0707
count = 0;
function pin(a) {
   if(count==4){
        console.log("Try after some time")
    } 
    else{
        for (i = 1; count < 4; i++) {
            console.log("count",count);
            if (x == a) {
                console.log("thats correct")
                break;
            }
           
            else {
                console.log("try another time",count);
                count++
                func()
            }
        }
    }
    
}
