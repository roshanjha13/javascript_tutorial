let myDate = new Date();
// console.log(myDate);
// 2023-09-14T06:37:26.800Z
// how to use date
// console.log(myDate.toString());
//Thu Sep 14 2023 12:03:10 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());
// Thu Sep 14 2023
// console.log(myDate.toISOString());
// 2023-09-14T06:37:59.405Z
// console.log(myDate.toJSON());
//2023-09-14T06:37:26.800Z
// console.log(myDate.toLocaleDateString());
// 14/9/2023
// console.log(myDate.toLocaleTimeString());
//12:05:38 pm
// console.log(myDate.toTimeString());
//12:05:38 GMT+0530 (India Standard Time)

let myCreateDate = new Date(2023, 0, 23);
// console.log(myCreateDate.toDateString());
// month start from 0
//Mon Jan 23 2023
let myCreateDate1 = new Date(2023, 0, 23, 5, 3);
// console.log(myCreateDate1.toLocaleString());
// 23/1/2023, 5:03:00 am
//date formatter
let myCreateDate2 = new Date("2023-01-14");
// console.log(myCreateDate2.toLocaleString());
//14/1/2023, 5:30:00 am
let myCreateDate3 = new Date("01-15-2023");
console.log(myCreateDate3.toLocaleString());
//15/1/2023, 12:00:00 am
