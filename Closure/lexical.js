function outer() {
  let username = "roshan";
  function innerOne() {
    let myPhone = 123455;
    console.log(username);
    console.log(myPhone);
  }
  function innerTwo() {
    console.log(username);
    // console.log(myPhone);
  }
  innerOne();
  innerTwo();
}
outer();
