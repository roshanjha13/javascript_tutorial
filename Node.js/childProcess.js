const cp = require("child_process");

// cp.exec(
//   "start chrome https://www.youtube.com/watch?v=suMvZWjjKbo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=9"
// );

const output = cp.execSync("node test.js");

console.log("output" + output);
