let index = 0;
while (index <= 10) {
  console.log(`value of index is ${index}`);
  index = index + 2;
}
console.log("-----------------------------------------------------");

let myArray = ["sachin", "shewag", "rohit"];

let arr = 0; //init
//condition
while (arr < myArray.length) {
  const element = myArray[arr]; //operation
  console.log(element);
  arr++; //termination
}
let score = 1;
do {
  console.log(`score is :-${score}`);
  score++;
} while (score <= 10);
