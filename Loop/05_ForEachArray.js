const coding = ["js", "ruby", "python", "java", "cpp"];

// coding.forEach(function (item) {
//   console.log(item);
// });

//pass function on foreach

// function printme(item) {
//   console.log(item);
// }
// coding.forEach(printme);

coding.forEach(function (item, index, arr) {
  console.log(item, index, arr);
});

//array of object

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: ".java",
  },
  {
    languageName: "c++",
    languageFileName: "cpp",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageFileName);
});
