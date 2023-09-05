const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((item) => item > 4);

// console.log(newNums);

//using foreach

const newNums1 = [];

myNums.forEach((item) => {
  if (item > 4) {
    newNums1.push(item);
  }
});
// console.log(newNums1);

const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publish: 1981,
    edition: 2004,
  },
  {
    title: "Book Two",
    genre: "Non-Fiction",
    publish: 1992,
    edition: 2008,
  },
  {
    title: "Book Three",
    genre: "History",
    publish: 1999,
    edition: 2007,
  },
  {
    title: "Book Four",
    genre: "Science",
    publish: 1989,
    edition: 2010,
  },
  {
    title: "Book Five",
    genre: "Non-Fiction",
    publish: 2009,
    edition: 2014,
  },
  {
    title: "Book Six",
    genre: "Fiction",
    publish: 1987,
    edition: 2010,
  },
  {
    title: "Book Seven",
    genre: "History",
    publish: 1986,
    edition: 1996,
  },
];

const userbooks = books.filter((bk) => {
  //   return bk.genre === "History";
  return bk.publish < 2000 && bk.genre === "History";
});

console.log(userbooks);
