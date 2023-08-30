const myArr = [0, 1, 2, 3, 4, 5];
// whenever you copy an array , it create shallow copy

const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(2, 3, 4, 5, 6);
// console.log(myArr[3]);

//array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.indexOf(3));
// console.log(myArr.includes(3));

// const newArr = myArr.join();

// console.log(myArr);

// console.log(newArr);

//slice ,splice

console.log("A =", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B =", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("c =", myArr);
