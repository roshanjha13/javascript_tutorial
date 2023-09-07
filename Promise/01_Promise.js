const promiseOne = new Promise(function (resolve, reject) {
  //do an async task
  //db calls,cryptograpy,network call
  setTimeout(function () {
    // console.log("Async Task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  // here we returm value
  //   console.log("Promise consumed");
});
