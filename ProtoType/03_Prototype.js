// let myName = "roshan     ";

// console.log(myName.trueLength);
let myHeros = ["sachin", "shewag"];

let heroPower = {
  sachin: "bat",
  shewag: "bowler and batsman",
  getShewagPower: function () {
    console.log(`Spidy power is ${this.shewag}`);
  },
};
// add property using prototype object ke andar agar hum property diye toh u sab mein chal jaye ga arr,obj,str,function

Object.prototype.roshan = function () {
  console.log(`roshan is present in all object`);
};
heroPower.roshan();

myHeros.roshan();

//if you give power to array add property can obj have access on it - answer is no

Array.prototype.rj = function () {
  console.log("roshna jha says hello");
};
// brother brother no sharable

myHeros.rj();
heroPower.rj();
