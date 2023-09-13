const User1 = {
  _email: "roshan@gmail.com",
  _password: "123abc",

  get email() {
    this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User1);
//here basis of which object we create function or object

console.log(tea.email);
