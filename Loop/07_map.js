const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((item) => item + 10);

// // console.log(newNums);

// // foreach

// const n1 = [];

// myNums.forEach((i) => {
//   const element = i + 10;
//   n1.push(element);
// });

// console.log(n1);

//chaining

const newNums = myNums.map((num) => num * 10).map((num) => num + 1);

console.log(newNums);
