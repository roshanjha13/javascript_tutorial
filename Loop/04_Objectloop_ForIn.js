const myObj = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  java: "java",
};

//for of not work in object
//to solve this issue we use for in

// for (const key in myObj) {
//   console.log(`${key} shorcut if for ${myObj[key]}`);
// }

const arr = [1, 2, 3, 4, 5];
for (const key in arr) {
  console.log(`${key} : ${arr[key]}`);
}
