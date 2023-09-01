//for single functioned error
// function calculateCartPrice(num1) {
//   return num1;
// }

// console.log(calculateCartPrice(2));

//for multiple args pass in single para :- use rest return array

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
  username: "roshan",
  price: 2000,
};

function handleObject(anyObj) {
  console.log(`username is ${anyObj.username} 
    and price is ${anyObj.price}`);
}

// handleObject(user);
handleObject({
  username: "sam",
  price: 399,
});

const myNewArr = [200, 400, 100, 600];

function returnSecondval(getArr) {
  return getArr[0];
}

console.log(returnSecondval(myNewArr));
