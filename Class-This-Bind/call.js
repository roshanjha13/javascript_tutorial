function setUsername(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  (this.email = email),
    (this.password = password),
    setUsername.call(this, username);
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
// here user not show
//here username are not called so because here reference called so user .call in function setUsername
