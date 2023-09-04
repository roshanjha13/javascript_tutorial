const user = {
  username: "roshan",
  price: 999,
  welccomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};

// //here username may be change how i do it
// // user.welccomeMessage();
// // //from here we change context of username so value will be changed
// // user.username = "sam";
// // user.welccomeMessage();

// console.log(this); //give {}

// function chai() {
//   console.log(this);
// }
// chai();

// const chai = () => {
//   let username = "hitesh";
//   console.log(this);
// };

// chai();

//object return in arrow

const addTwo = (num1, num2) => ({
  username: "roshan",
});
console.log(addTwo(4, 3));
