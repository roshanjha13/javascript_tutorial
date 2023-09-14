// // it by default library for javascript
// console.log(Math);
// console.log(Math.abs(-4));
// //- value change  to +ve but not in case of +ve value
// console.log(Math.round(4.63));
// //round of value for approx system
// console.log(Math.ceil(4.2));
// //it choose top value no use of here approx rule
// console.log(Math.floor(4.9));
// //it choose lower value no use of here approx rule
// console.log(Math.min(3, 4, 56, 2, 6, 7));
// // give min value in this no
// console.log(Math.max(3, 4, 56, 2, 6, 7));
// // give max value in this no

console.log(Math.random());
//give random value every exec b/w 0-1
console.log(Math.random() * 10);
// it give random val for every exec b/w 0-9
console.log(Math.random() * 10 + 1);
// it give random val for every exec b/w 1-90
console.log(Math.floor(Math.random() * 10) + 1);
// it give random val for every exec b/w 1-10 in round of remove .

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
