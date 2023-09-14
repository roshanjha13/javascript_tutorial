const score = 400;
console.log(score);

console.log(score.toString());
console.log(score.toFixed(2));
//number ke badd 2 decimal

const otherNumber = 1123.5966;
console.log(otherNumber.toPrecision(4));
// ex 23.789 preciseion(2),133.556667(3),1144.443727(4)

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); //op give in , for us standard
