// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let x = [];

// arr.map(e => {
//     if (e == 1 || e == 2) {
//         x.push(e)
//     } else {
//         let flag = 0;
//         for (let i = 2; i < e; i++) {
//             if (e % i == 0) {
//                 flag = 1;
//                 break
//             }
//         }
//         if (flag == 0) {
//             x.push(e)
//         }
//     }
// })
// console.log(x);
// function isPrime(s) {
//     for (i = 2; i < s; i++) {
//         if (s % i == 0) {
//             return false
//         }
//     }
// }

function isPrime(num) {
    if (num < 2) return false; // 0 and 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // number is divisible by i, so it's not prime
      }
    }
    return true; // number is not divisible by any i, so it's prime
  }
  
function getPrimeFactors(n) {
    a = [];
    for (i = 2; i <= n; i++) 
    {
        if (isPrime(i) && n % i == 0) {
            a.push(i)
            n = n / i;

            i = 1;
            if(isPrime(n)){
                a.push(n)
                break;
            }
        }
    }
    return a

}

let n = [15];
obj = {}
let x =n.map(e => {
    if(isPrime(e)){
        obj[e]=[e]
    }
    else{
        obj[e] = getPrimeFactors(e)
    }
    
})
console.log(obj)