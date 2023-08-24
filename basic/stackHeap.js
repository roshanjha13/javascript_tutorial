let myName = "roshan ";

let anotherName = myName;
anotherName = "rahul";

console.log(anotherName);
console.log(myName);

let user = {
  email: "user@gmai.com",
  upi: "user@ybl",
  name: "userOne",
};

let userTwo = user;

userTwo.email = "hitesh@gmail.com";

console.log(user.email);
console.log(userTwo.email);
