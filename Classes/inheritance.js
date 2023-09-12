class User3 {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class Teacher extends User3 {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course added by ${this.username}`);
  }
}

const user1 = new Teacher("user1", "user1@gmail.com", "123");
user1.addCourse();

const chai = new User3("chai");
// chai.addCourse();
chai.logMe();
