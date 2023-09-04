// function chai() {
//   console.log(`Db connected`);
// }
// chai();

//iife

(function chai() {
  //name iife
  console.log(`Db connected`);
})();

(function chaiTwo() {
  console.log(`Db connected Two`);
})();

((name) => {
  //unnamed iife
  console.log(`Db connected Three ${name}`);
})("roshan");
