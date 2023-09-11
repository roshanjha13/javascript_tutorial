function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("roshan", 11, true);
const userTwo = new User("rahul", 12, false);

// console.log(auto instanceof userOne);
console.log(userTwo);
