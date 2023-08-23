// console.log(null > 0); //f
// console.log(null == 0); //f
// console.log(null >= 0); //t
/*
convert null to a number,treating it as 0 
thats why null >=0 is a true
*/

// console.log(undefined == null);//t
// console.log(undefined > null);//f
// console.log(undefined >= null);//f

// === strict check , value and data type is chceked

console.log("2" === 2); //f
console.log("2" == 2); //t

console.log("2" > 1); //t
console.log("02" > 1); //t
