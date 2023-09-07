const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    // let error = false;
    if (!error) {
      resolve({
        username: "roshan",
        password: "123",
      });
    } else {
      reject("Error something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("The Promise is either resolved or rejected"));
