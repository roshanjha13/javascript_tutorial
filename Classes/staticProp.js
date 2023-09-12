class User4 {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`user name: ${this.username}`);
  }
  //whenever a user create make a user id of that user
  static createId() {
    return Math.floor(Math.random() * 9 + 1);
  }
}

const roshan = new User4("roshan");
// console.log(roshan.createId());

class Teacher extends User4 {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const t1 = new Teacher("rrp", "rrp@gmail.com");
t1.logMe();
t1;
// console.log(roshan);
