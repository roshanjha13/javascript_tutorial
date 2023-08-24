const { exec } = require("child_process");
const { stdout, stderr } = require("process");

exec("ls -lh", (error, stdout, stderr) => {
  if (error) {
    console.log(`error:${error.message}`);
  }
  if (stderr) {
    console.log(`stderr:${stderr}`);
  }
  console.log(`stdout`);
});
