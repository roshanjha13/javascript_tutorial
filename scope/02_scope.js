function one() {
  const username = "roshan";

  function two() {
    const website = "youtube";
    // console.log(username);
  }
  //   console.log(website);
  two();
}
one();

//icecream scenario

if (true) {
  const username = "roshan";
  if (username === "roshan") {
    const website = "youtube";
    // console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

//function'
console.log(addOne(5));
function addOne(value) {
  return value + 1;
}

// addOne(5);

//function expression
//error of because of hoisting
// console.log(addTwo(5));// Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2;
};
// addTwo(5);
