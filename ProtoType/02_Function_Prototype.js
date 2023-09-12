function createUser(username, score) {
  this.username = username;
  this.score = score;
}

//make your function with prototype
createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 10);
// here our code give error but property are injected ,so we use new for solve this issue

chai.printMe();
