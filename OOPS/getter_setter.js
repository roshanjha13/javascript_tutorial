class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    return (this._email = value);
  }

  //we apply getter and setter methods in any properties
  get password() {
    //use var who is set in setter()
    return this._password.toUpperCase();
  }
  set password(value) {
    //1ST CHANGE VARIABLE NAME
    this._password = value.toUpperCase();
  }
}

// we define getter for password ,so also define setter() in password

const roshan = new User("r@shan.ai", "abc");

console.log(roshan.password);
console.log(roshan.email);

/*
class ke bahar se valu get karna chate ho to
 eliye getter() hota hai ,set karna chahte ho  class
 ke andar toh setter use hota hai
 */
/*
  FOR the time of value set,constructor call again
  and again so it get call stck exceed
*/
/*

*/
