let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let x = [];

arr.map(e => {
    if (e == 1 || e == 2) {
        x.push(e)
    } else {
        let flag = 0;
        for (let i = 2; i < e; i++) {
            if (e % i == 0) {
                flag = 1;
                break
            }
        }
        if (flag == 0) {
            x.push(e)
        }
    }
})
console.log(x);