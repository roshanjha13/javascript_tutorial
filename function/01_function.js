function sayHello() {
  console.log("h");
  console.log("e");
  console.log("l");
  console.log("l");
  console.log("o");
}

// sayHello();

function sumOf(a, b) {
  return a + b;
}
const result = sumOf(3, 5);
// console.log("result value :", result);

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("enter the user name");
    return;
  }
  return `${username} just loggedin`;
}

// const res = loginUserMessage("roshan");
const res = loginUserMessage();
console.log(res);
