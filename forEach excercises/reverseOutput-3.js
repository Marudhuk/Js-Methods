let arr=[1,2,3,4,5]
reversedArr=[]
    arr.forEach((e) => {
        reversedArr.unshift(e);
        console.log(e)
      });
console.log(reversedArr)