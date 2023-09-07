const myNums = [1, 2, 3];

// const initialValue = 0;

// const myTotal = myNums.reduce(function (acc, crrVal) {
//   console.log(`acc:${acc} and currval:${crrVal}`);
//   return acc + crrVal;
// }, 3);
// console.log(myTotal);

const myTotal = myNums.reduce((acc, crrVal) => {
  console.log(`acc:${acc} and currval:${crrVal}`);
  return acc + crrVal;
}, 3);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 2999,
  },
];
//item denote array of object

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(totalPrice);
