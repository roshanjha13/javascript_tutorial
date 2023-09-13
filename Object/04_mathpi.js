//Object.getOwnPropertyDescriptor -->
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// const myNewOnject = Object.create("null");

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,
  order: function () {
    console.log("chai aur code");
  },
};
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, "name", {
//   writable: false,
//   enumerable: false,
// });

// chai.name = "roshan";
// console.log(chai.name);
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}
