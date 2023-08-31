//singleton Object

// const twitterUser = new Object();

// const twitterUser = {};
// twitterUser.id = "123abc";
// twitterUser.name = "sammy";
// twitterUser.isLoggedIn = false;

// console.log(twitterUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstName: "roshan",
      lastName: "jha",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
const obj3 = {
  5: "e",
  6: "f",
};
// concatination project
const c = { ...obj1, ...obj2 };
// console.log(c);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const d = { obj1, obj2 };

// const e = Object.assign({}, obj1, obj2, obj3);

// console.log(d);
// console.log(e);
// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));
console.log(Object.entries(regularUser));
// some times value may be not exit so takle this issue
console.log(regularUser.hasOwnProperty("isLoggedIn"));
