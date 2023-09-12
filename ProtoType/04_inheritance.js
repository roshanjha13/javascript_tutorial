const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;
//__proto__ give access to inheritance

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotheruser = "chaiaurcode    ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`true length is:${this.trim().length}`);
};

anotheruser.trueLength();
