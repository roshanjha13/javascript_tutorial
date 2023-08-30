class Product {
  discount = 10;
  constructor(n, p) {
    //create new real life instance
    //when we create an object this constructor is the first function thats get created
    this.name = n; //data member
    this.price = p;
  }
  //you can one constructor create in javascript
  //member function
  displayProduct() {
    console.log(this.name, this.price);
  }

  buyProduct() {
    console.log(this.name, this.discount);
  }
}

let iphone = new Product("iphone11", "200000");
let macbook = new Product("macbook", "2000000");
console.log(iphone);
console.log(macbook);
iphone.displayProduct();
iphone.buyProduct();
//other example
//
// let obj = {
//   name: "roshan",
//   age: 23,
// };

//create object: this is create a new object in product class
//let iphone = new Product("iphone","2000")
//first constructor(c) function that called c(p,n) c have 2 parameter
// class is a wrapper over function
