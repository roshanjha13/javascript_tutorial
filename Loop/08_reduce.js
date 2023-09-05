const myNums = [1, 2, 3];

// const initialValue = 0;

const myTotal = myNums.reduce(function (acc, crrVal) {
  return acc + crrVal;
}, 0);
console.log(myTotal);
