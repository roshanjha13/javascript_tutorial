const myNums = [1, 2, 3];

// const initialValue = 0;

// const myTotal = myNums.reduce(function (acc, crrVal) {
//   console.log(`acc:${acc} and currval:${crrVal}`);
//   return acc + crrVal;
// }, 3);
// console.log(myTotal);

const myTotal = myNums.reduce((acc, crrVal) => {
  console.log(`acc:${acc} and currval:${crrVal}`);
  return acc + crrVal;
}, 3);
console.log(myTotal);
