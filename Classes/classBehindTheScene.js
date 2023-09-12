function User2(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User2.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User2.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User2("tea", "tea@fb.com", "123");
console.log(tea.encryptPassword());
console.log(tea.changeUserName());
