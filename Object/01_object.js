//singleton:
// Object.create
// whenver you use constructor in an object then it is called singleton object

//object literals
// symbol declare

const mySym = Symbol("key1");

const jsUser = {
  name: "roshan",
  age: 18,
  [mySym]: "myKey1",
  location: "kolkata",
  email: "roshan@roshan.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

//access to object
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

//change value
// jsUser.email = "roshan@gmail.com";

//freeze for no one update value
// Object.freeze(jsUser);
// jsUser.email = "roshan@gmail.in";
// console.log(jsUser.email);
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("hello js user");
};

jsUser.greetingTwo = function () {
  console.log(`hello js user,${this.name}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
