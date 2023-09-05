for (let index = 0; index < 10; index++) {
  const element = index;
  if (element === 5) {
    // console.log("5 is best number");
  }
  //   console.log(element);
}

for (let j = 1; j <= 10; j++) {
  console.log(`table of : ${j}`);
  for (let k = 0; k <= 10; k++) {
    // console.log(`inner loop value : ${k} and inner loop ${j}`);
    console.log(j + "*" + k + "=" + j * k);
  }
}
console.log("-----------------------------------------------------");

let myArray = ["sachin", "shewag", "rohit"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

console.log("length of an myarray is :-", myArray.length);

console.log("-----------------------------------------------------");

//break and continue

// for (let index = 1; index < 20; index++) {
//   if (index == 5) {
//     console.log(`Deteched 5`);
//     break;
//   }
//   console.log(`value of index is ${index}`);
// }
for (let index = 1; index < 20; index++) {
  if (index == 5) {
    console.log(`Deteched 5`);
    continue;
  }
  console.log(`value of index is ${index}`);
}
