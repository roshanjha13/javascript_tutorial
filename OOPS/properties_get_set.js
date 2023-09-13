function User(emai, password) {
  this._email = emai;
  this._password = password;
  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const roshan = new User("roshan@gamil.com", "abc134");

console.log(roshan.email);
console.log(roshan.password);
