// if (true) {
// }
// //if condition will be true then literal run
// //if condition is false then scope will be not run

// const isUserloggedIn = true;
// const temp = 41;

// if (temp < 50) {
//   console.log("less than 50");
// } else {
//   console.log("temperature is greater than 50");
// }

// console.log("executed");

// const score = 200;

// if (score > 100) {
//   console.log("score is greater than 100");
// } else {
//   console.log("score is less than 100");
// }

//comparision operator
//<,>,<=,>=,!==,==,===,!=
// const balance = 1000;

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log(`balance is ${balance}`);
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

//if both condition true -> true
if (userLoggedIn && debitCard) {
  console.log("allow to buy courses");
}

//anyone is true
if (loggedInFromEmail || loggedInFromGoogle) {
  console.log(`user allow to loggedin`);
}
